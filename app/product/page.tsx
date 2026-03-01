const sections = [
  {
    title: "Editing",
    description:
      "Powerful tools to cut, color-grade, and polish your content — all in one place.",
    features: [
      {
        label: "Multi-track video and audio editing",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M15.6 11.6 14 10l-3.2 3.2M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9" />
            <circle cx="18" cy="18" r="3" />
            <path d="m21.7 20.4-1.1-1.1" />
          </svg>
        ),
      },
      {
        label: "AI-assisted clip selection and highlights",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        ),
      },
      {
        label: "One-click export for every platform",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        ),
      },
      {
        label: "Personal AI trained on your content for new ideas",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h3a3 3 0 0 1 3 3v1" />
            <path d="M8 9.5A4 4 0 0 1 12 2" />
            <path d="M10 11H7a3 3 0 0 0-3 3v1" />
            <rect x="2" y="15" width="6" height="6" rx="1" />
            <rect x="16" y="15" width="6" height="6" rx="1" />
            <rect x="9" y="15" width="6" height="6" rx="1" />
          </svg>
        ),
      },
      {
        label: "Script and caption generation from your footage",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <line x1="8" y1="8" x2="16" y2="8" />
            <line x1="8" y1="12" x2="13" y2="12" />
          </svg>
        ),
      },
      {
        label: "Thumbnail and title suggestions based on your style",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Scheduling",
    description:
      "Plan and publish across every channel without ever leaving your workflow.",
    features: [
      {
        label: "Cross-platform scheduling calendar",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
      },
      {
        label: "Optimal posting-time suggestions",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
      },
      {
        label: "Automated republishing and drip campaigns",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Administrative",
    description:
      "Handle contracts, invoices, and team coordination so you can focus on creating.",
    features: [
      {
        label: "Contract and deal-memo templates",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        ),
      },
      {
        label: "Invoicing and payment tracking",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
      },
      {
        label: "Team roles, permissions, and approval flows",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Content Tracking & Provenance",
    description:
      "Know where your content lives, how it spreads, and prove it's yours.",
    features: [
      {
        label: "Track where your content is reposted or embedded",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
      },
      {
        label: "Immutable ownership records for every asset",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            <circle cx="12" cy="16" r="1" />
          </svg>
        ),
      },
      {
        label: "Unauthorized use alerts and takedown assistance",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        ),
      },
    ],
  },
];

export default function ProductPage() {
  return (
    <div
      className="mx-auto max-w-4xl px-6 py-16"
      style={{ color: "#2D1B4E", fontFamily: 'Cambria, "Times New Roman", serif' }}
    >
      <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Product
      </h1>
      <p className="mt-2 text-center text-lg text-gray-600">
        Everything you need to create, distribute, and manage. Tailor your features to what matters most to you.
      </p>

      {sections.map((section, i) => (
        <div key={section.title}>
          {i > 0 && <hr className="my-12 border-t border-gray-300" aria-hidden />}
          <section className={i === 0 ? "mt-12" : ""}>
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-3 text-lg leading-relaxed">{section.description}</p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {section.features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-opacity hover:opacity-60 cursor-pointer"
                  style={{ backgroundColor: "#F0ECE1" }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "#2D1B4E", color: "#F6F2E7" }}
                  >
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium leading-snug">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
