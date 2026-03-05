"use client";

import { useRouter } from "next/navigation";

export default function EditingAiClipsPage() {
  const router = useRouter();

  function handleCheckout(pricingType: "unlimited" | "tokens" = "unlimited") {
    try {
      localStorage.setItem(
        "allanki_selected_features",
        JSON.stringify(["editing-ai-clips"])
      );
      localStorage.setItem(
        "allanki_pricing_type",
        pricingType
      );
    } catch {
      // ignore storage errors in MVP
    }
    router.push("/checkout?product=ai-assisted-editing");
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
        <div className="border-b border-[#DFD2BD] bg-gradient-to-r from-[#F6F2E7] via-[#F0ECE1] to-[#E8DECA] px-8 pb-8 pt-10 sm:px-10 sm:pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8C7AB5]">
            Editing Core Offering
          </p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                AI-Assisted Clip Selection &amp; Highlights
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-800">
                Clip editing that learns your style, optimizes the first three seconds, and
                turns long recordings into high-performing short-form content. No more spending hours
                stuck in an editor.
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
                    <p className="text-sm font-semibold">Unlimited Video Edits</p>
                    <span className="text-lg font-bold">$200 / month</span>
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
                    <span className="text-lg font-bold">$50</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    $50 for 10 tokens • Average video uses 5-10 tokens
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-10 border-t border-[#E4D8C4] px-8 py-10 md:grid-cols-[2fr,3fr] sm:px-10">
          <div className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8C7AB5]">
              How it works
            </h2>
            <p className="text-sm leading-relaxed text-gray-800">
              Connect your existing channels, upload raw video, and let Allanki learn directly
              from the content that already performs for you. Our models study your pacing,
              framing, reactions, and storytelling patterns so every cut feels on-brand for
              your page. No generic templates here.
            </p>
            <p className="text-sm leading-relaxed text-gray-800">
              From there, you can drop in long recordings and instantly get multiple
              short-form clip options. Each one is centered around strong hooks, key beats,
              and the moments most likely to keep people watching all the way through.
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold">
                  Trained on your past videos
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-800">
                  Instead of guessing what fits your brand, we analyze your existing library.
                  We look at what you post, what gets saved and shared, and where viewers tend to drop off.
                  That data powers an editor that understands how you like your content to
                  look, sound, and feel.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Optimized for quick cuts that actually retain viewers
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-800">
                  The first three seconds are everything. Our system scores potential openings,
                  tests different hook points, and builds around the cuts most likely to grab
                  attention and hold it. That means more watch time and higher RPM for you.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  From raw footage to publish-ready clips
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-800">
                  Upload once and receive multiple short clips tuned for different platforms
                  and audiences. You stay in control. Review, tweak, or approve as-is. Either way,
                  you&apos;re no longer burning two-plus hours on a single 60-second edit.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Create more, edit less
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-800">
                  Free up your calendar to record more ideas, test more angles, and spend more
                  time actually making things you enjoy. Editing becomes a quick review step,
                  not a full-time job.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-[#D6C8B0] bg-[#2D1B4E]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,242,231,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(141,122,181,0.3),_transparent_55%)]" />
              <iframe
                className="relative z-10 h-full w-full"
                src="https://www.youtube.com/embed/VIDEO_ID_AI_CLIPS"
                title="AI-Assisted Clip Selection demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-gray-600">
              Demo video placeholder. Replace <code>VIDEO_ID_AI_CLIPS</code> with your actual
              demo video ID.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

