"use client";

import Link from "next/link";
import { useState } from "react";

const tiers = [
  {
    badge: "For individuals",
    name: "Free",
    description: "Get started with the essentials to manage your creative work.",
    monthlyPrice: "$0 USD",
    yearlyPrice: "$0 USD",
    billingNote: null,
    monthlyNote: null,
    yearlySavings: null,
    cta: "Get Started Free",
    highlighted: false,
    bestValue: false,
  },
  {
    badge: "For professionals and small teams",
    name: "Pro",
    description: "Unlock powerful tools that scale with your creative output.",
    monthlyPrice: "$20 USD",
    yearlyPrice: "$15 USD",
    billingNote: "per member / month",
    monthlyNote: null,
    yearlySavings: "Save 25%",
    cta: "Get Allanki Pro",
    highlighted: false,
    bestValue: false,
  },
  {
    badge: "For growing businesses",
    name: "Business",
    description: "Everything your team needs to collaborate and grow together.",
    monthlyPrice: "$45 USD",
    yearlyPrice: "$35 USD",
    billingNote: "per member / month, billed annually",
    monthlyNote: "$45 when billed monthly",
    yearlySavings: null,
    cta: "Get Allanki Business",
    highlighted: true,
    bestValue: true,
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(true);

  return (
    <div
      className="mx-auto max-w-5xl px-6 py-16"
      style={{ color: "#2D1B4E" }}
    >
      <h1
        className="text-center text-4xl font-bold tracking-tight sm:text-5xl"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        Pricing
      </h1>
      <p
        className="mt-3 text-center text-lg opacity-60"
        style={{ fontFamily: 'Cambria, "Times New Roman", serif' }}
      >
        Choose the plan that fits your creative workflow.
      </p>

      <div className="mt-8 flex justify-center">
        <div
          className="inline-flex items-center rounded-lg border text-sm font-medium"
          style={{ borderColor: "#d4d4d4" }}
        >
          <button
            onClick={() => setYearly(false)}
            className={`rounded-lg px-4 py-2 transition-colors ${
              !yearly ? "text-white" : "opacity-60"
            }`}
            style={!yearly ? { backgroundColor: "#2D1B4E" } : {}}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 transition-colors ${
              yearly ? "text-white" : "opacity-60"
            }`}
            style={yearly ? { backgroundColor: "#2D1B4E" } : {}}
          >
            Yearly
            <span className={yearly ? "text-green-300" : "text-green-600"}>
              &middot; Save 25%
            </span>
          </button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className="relative flex flex-col">
            {tier.bestValue && (
              <div
                className="absolute -top-5 left-0 right-0 rounded-t-xl py-1.5 text-center text-sm font-semibold text-white"
                style={{ backgroundColor: "#2D1B4E" }}
              >
                Best value
              </div>
            )}

            <div
              className={`flex flex-1 flex-col justify-between rounded-xl border p-6 ${
                tier.bestValue ? "rounded-t-none" : ""
              }`}
              style={{
                borderColor: tier.bestValue ? "#2D1B4E" : "#d4d4d4",
                backgroundColor: "#FAFAF7",
              }}
            >
              <div>
                <span
                  className="inline-block rounded-lg border px-3 py-1 text-xs font-medium"
                  style={{ borderColor: "#d4d4d4" }}
                >
                  {tier.badge}
                </span>

                <h2
                  className="mt-4 text-2xl font-bold"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  {tier.name}
                </h2>

                <p className="mt-2 text-sm leading-relaxed opacity-70">
                  {tier.description}
                </p>

                <p className="mt-5 text-2xl font-bold">
                  {yearly ? tier.yearlyPrice : tier.monthlyPrice}
                </p>
                {tier.billingNote && (
                  <p className="mt-1 text-xs opacity-60">
                    {yearly
                      ? "per member / month, billed annually"
                      : "per member / month"}
                  </p>
                )}
              </div>

              <div className="mt-8">
                <Link
                  href="/"
                  className={`block w-full rounded-lg py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                    tier.highlighted ? "text-white" : "border"
                  }`}
                  style={
                    tier.highlighted
                      ? { backgroundColor: "#2D1B4E" }
                      : { borderColor: "#2D1B4E", color: "#2D1B4E" }
                  }
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
