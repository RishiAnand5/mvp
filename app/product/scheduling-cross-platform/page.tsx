"use client";

import { useRouter } from "next/navigation";

export default function SchedulingCrossPlatformPage() {
  const router = useRouter();

  function handleCheckout(pricingType: "unlimited" | "tokens" = "unlimited") {
    try {
      localStorage.setItem(
        "allanki_selected_features",
        JSON.stringify(["scheduling-cross-platform"])
      );
      localStorage.setItem(
        "allanki_pricing_type",
        pricingType
      );
    } catch {
      // ignore storage errors in MVP
    }
    router.push("/checkout?product=cross-platform-scheduling");
  }

  return (
    <div
      className="mx-auto max-w-5xl px-6 py-16"
      style={{ color: "#2D1B4E", fontFamily: 'Cambria, "Times New Roman", serif' }}
    >
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => router.push("/product")}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#7A6B9A] transition-colors hover:text-[#2D1B4E]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to products
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl bg-[#F0ECE1] shadow-xl ring-1 ring-[#E0D7C6]">
        <div className="border-b border-[#DFD2BD] bg-gradient-to-r from-[#F6F2E7] via-[#F0ECE1] to-[#E0F2F8] px-8 pb-8 pt-10 sm:px-10 sm:pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4F7CA8]">
            Scheduling Core Offering
          </p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Cross-Platform Scheduling &amp; Posting
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-800">
                Approve your AI-edited clips once, then schedule and publish them everywhere
                your audience lives — from a single calendar.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => handleCheckout("unlimited")}
                className="inline-flex items-center justify-center rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F6F2E7] shadow-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#2D1B4E" }}
              >
                Start with unlimited plan
              </button>
              <button
                type="button"
                onClick={() => handleCheckout("tokens")}
                className="inline-flex items-center justify-center rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2D1B4E] shadow-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#F0ECE1", border: "1px solid #D6C8B0" }}
              >
                Start with token plan
              </button>
            </div>
          </div>
          <div className="mt-5 space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex-1 rounded-lg border border-[#D6C8B0] bg-[#F6F2E7] p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">Unlimited Scheduling</p>
                    <span className="text-lg font-bold">$50 / month</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Perfect for high-volume creators
                  </p>
                </div>
              </div>
              <div className="flex-1 rounded-lg border border-[#D6C8B0] bg-[#F6F2E7] p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">Token-Based Pricing</p>
                    <span className="text-lg font-bold">$25</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    $25 for 10 tokens • Average post uses 1-2 tokens
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-10 border-t border-[#E4D8C4] px-8 py-10 md:grid-cols-[2fr,3fr] sm:px-10">
          <div className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4F7CA8]">
              How it works
            </h2>
            <p className="text-sm leading-relaxed text-gray-800">
              Connect Instagram, TikTok, YouTube, Facebook, and more, then move straight from
              approved clips into a posting schedule that runs ahead of you. No more jumping
              between apps, messaging yourself files, or re-uploading the same video five
              different times.
            </p>
            <p className="text-sm leading-relaxed text-gray-800">
              Your content calendar lives in one place. You can see what&apos;s going live,
              where, and when — and adjust with a couple of clicks.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold">
                  Directly connected to AI-Assisted Clip Selection
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-800">
                  As soon as your AI-generated clips are approved, they&apos;re available to
                  schedule across every connected channel. There&apos;s no extra exporting,
                  renaming, or manual upload step in between.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  One calendar for every platform
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-800">
                  See all of your upcoming posts in a single calendar or queue view — across
                  Instagram, TikTok, YouTube (Shorts and long-form), Facebook, and beyond.
                  Spot gaps, avoid overlaps, and keep a consistent publishing rhythm without
                  needing a separate tool for each platform.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Schedule once, adapt everywhere
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-800">
                  Create the content once, then let the scheduling layer respect what works on
                  each platform — from timing to format. Your brand stays consistent while the
                  distribution is tuned to how people actually scroll and watch.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  More output, less overhead
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-800">
                  When editing and posting are tightly connected, you can run a high-output
                  content engine without building a large operations team around you. You
                  spend your energy on ideas and recording — the system handles the logistics.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-[#D6C8B0] bg-[#2D1B4E]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,244,255,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(79,124,168,0.35),_transparent_55%)]" />
              <iframe
                className="relative z-10 h-full w-full"
                src="https://www.youtube.com/embed/VIDEO_ID_SCHEDULING"
                title="Cross-Platform Scheduling & Posting demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-gray-600">
              Demo video placeholder — replace <code>VIDEO_ID_SCHEDULING</code> with your
              actual demo video ID.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

