"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { featureLabels } from "../lib/features";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

function CheckoutForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "free";
  const product = searchParams.get("product");
  const isPro = plan === "pro";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [pricingType, setPricingType] = useState<"unlimited" | "tokens" | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("allanki_selected_features");
    if (stored) {
      try {
        const ids: string[] = JSON.parse(stored);
        setSelectedFeatures(ids);
      } catch {}
    }
    const storedPricing = localStorage.getItem("allanki_pricing_type");
    if (storedPricing === "unlimited" || storedPricing === "tokens") {
      setPricingType(storedPricing);
    }
  }, []);

  const featureNames = selectedFeatures
    .map((id) => featureLabels[id] || id)
    .filter(Boolean);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Determine the plan name with pricing info included
    let planName = "";
    if (product === "ai-assisted-editing") {
      planName = pricingType === "unlimited" 
        ? "AI Editing - Unlimited" 
        : pricingType === "tokens" 
        ? "AI Editing - Token-based" 
        : "AI Editing";
    } else if (product === "cross-platform-scheduling") {
      planName = pricingType === "unlimited" 
        ? "Scheduling - Unlimited" 
        : pricingType === "tokens" 
        ? "Scheduling - Token-based" 
        : "Scheduling";
    } else {
      planName = isPro ? "Pro" : "Free";
    }

    const payload = {
      name,
      email,
      plan: planName,
      features: featureNames.join(", "),
    };

    console.log("[Checkout] Submitting payload:", payload);
    console.log("[Checkout] Google Script URL:", GOOGLE_SCRIPT_URL || "(not set)");

    try {
      if (GOOGLE_SCRIPT_URL && !GOOGLE_SCRIPT_URL.includes("PASTE")) {
        const res = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        console.log("[Checkout] Fetch completed, status:", res.status, res.type);
      } else {
        console.warn("[Checkout] Google Script URL not configured. Set NEXT_PUBLIC_GOOGLE_SCRIPT_URL in .env.local");
      }
    } catch (err) {
      console.error("[Checkout] Error submitting to Google Sheets:", err);
    }

    setSubmitted(true);
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6 text-center"
        style={{ color: "#2D1B4E" }}
      >
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{ backgroundColor: "#2D1B4E" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#F6F2E7" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1
          className="mt-6 text-3xl font-bold sm:text-4xl"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Welcome to Allanki, {name}!
        </h1>
        <p className="mt-3 text-lg opacity-70">
          Your {isPro ? "Pro" : "Free"} plan is confirmed. We&apos;ll be in touch at {email}.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#2D1B4E" }}
        >
          Back to home
        </Link>
      </motion.div>
    );
  }

  return (
    <div
      className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6"
      style={{ color: "#2D1B4E" }}
    >
      <div className="w-full max-w-md">
        <Link
          href="/product"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium opacity-60 transition-opacity hover:opacity-100"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to products
        </Link>

        <h1
          className="text-center text-3xl font-bold sm:text-4xl"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Checkout
        </h1>
        {product === "ai-assisted-editing" ? (
          <p className="mt-2 text-center text-lg opacity-70">
            AI-assisted Editing — {pricingType === "tokens" ? "$50 USD" : "$200 USD / Month"}
          </p>
        ) : product === "cross-platform-scheduling" ? (
          <p className="mt-2 text-center text-lg opacity-70">
            Cross-Platform Scheduling — {pricingType === "tokens" ? "$25 USD" : "$50 USD / Month"}
          </p>
        ) : (
          <p className="mt-2 text-center text-lg opacity-70">
            {isPro ? "Allanki Pro — $15 USD / month" : "Allanki Free — $0 USD"}
          </p>
        )}

        {featureNames.length > 0 && (
          <div className="mt-6 rounded-lg border p-4" style={{ borderColor: "#d4d4d4", backgroundColor: "#FAFAF7" }}>
            <p className="text-xs font-semibold uppercase tracking-wide opacity-50 mb-2">
              {featureNames.length} feature{featureNames.length !== 1 ? "s" : ""} selected
            </p>
            <ul className="space-y-1">
              {featureNames.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 opacity-60">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">
              Full name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
              style={{ borderColor: "#d4d4d4", backgroundColor: "#FAFAF7" }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
              style={{ borderColor: "#d4d4d4", backgroundColor: "#FAFAF7" }}
            />
          </div>

          {(isPro || product === "ai-assisted-editing" || product === "cross-platform-scheduling") && (
            <>
              <div>
                <label htmlFor="card" className="block text-sm font-medium mb-1.5">
                  Card number <span className="font-normal opacity-50">(put dummy numbers)</span>
                </label>
                <input
                  id="card"
                  type="text"
                  required
                  placeholder="4242 4242 4242 4242"
                  className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
                  style={{ borderColor: "#d4d4d4", backgroundColor: "#FAFAF7" }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium mb-1.5">
                    Expiry
                  </label>
                  <input
                    id="expiry"
                    type="text"
                    required
                    placeholder="MM / YY"
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
                    style={{ borderColor: "#d4d4d4", backgroundColor: "#FAFAF7" }}
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium mb-1.5">
                    CVC
                  </label>
                  <input
                    id="cvc"
                    type="text"
                    required
                    placeholder="123"
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
                    style={{ borderColor: "#d4d4d4", backgroundColor: "#FAFAF7" }}
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-4 w-full rounded-lg py-4 text-sm font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: "#2D1B4E" }}
          >
            {submitting
              ? "Submitting..."
              : product === "ai-assisted-editing" || product === "cross-platform-scheduling"
              ? "Submit payment"
              : isPro
              ? "Submit payment"
              : "Get started"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs opacity-50">
          {(product === "ai-assisted-editing" || product === "cross-platform-scheduling") && pricingType === "unlimited"
            ? "You can cancel anytime. No long-term commitment."
            : (product === "ai-assisted-editing" || product === "cross-platform-scheduling") && pricingType === "tokens"
            ? product === "ai-assisted-editing"
              ? "One-time payment for 10 tokens. Tokens never expire."
              : "One-time payment for 10 tokens. Tokens never expire."
            : isPro
            ? "You can cancel anytime. No long-term commitment."
            : "No credit card required."}
        </p>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutForm />
    </Suspense>
  );
}
