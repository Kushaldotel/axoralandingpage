const tiers = [
  {
    name: "Starter",
    price: "$99",
    period: "/mo",
    blurb: "One automation, live and looked after.",
    features: [
      "A single automation workflow",
      "Standard integrations",
      "Human approval built in",
      "Ongoing maintenance & support",
    ],
    cta: "Book a Free Consultation",
    featured: false,
  },
  {
    name: "Growth",
    price: "Custom",
    period: "",
    blurb: "Multiple systems working together across your business.",
    features: [
      "Multiple automation workflows",
      "Custom integrations (CRM, M365, APIs)",
      "Live dashboards & reporting",
      "7-day priority support",
    ],
    cta: "Book a Free Consultation",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    blurb: "Bespoke software and AI, built end to end.",
    features: [
      "Custom software & AI development",
      "Internal AI assistants / RAG",
      "Dedicated engineering team",
      "SLA-backed support",
    ],
    cta: "Talk to Us",
    featured: false,
  },
];

const check = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function Pricing() {
  return (
    <section className="section section-alt" id="pricing">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Pricing</span>
          <h2>
            Starting from $99.<br className="br-lg" /> Priced on what you actually need.
          </h2>
          <p>
            Every build is scoped on a free consultation and quoted upfront. You approve the
            price before any development begins — no surprises later.
          </p>
        </div>

        <div className="price-grid">
          {tiers.map((t, i) => (
            <div
              className={`price-card reveal${i % 3 ? ` delay-${i % 3}` : ""}${t.featured ? " featured" : ""}`}
              key={t.name}
            >
              {t.featured && <span className="price-badge">Most popular</span>}
              <h3>{t.name}</h3>
              <p className="price-blurb">{t.blurb}</p>
              <div className="price-amount">
                <strong>{t.price}</strong>
                {t.period && <span>{t.period}</span>}
              </div>
              <ul className="price-list">
                {t.features.map((f) => (
                  <li key={f}>
                    <span className="price-check">{check}</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#reach" className={`btn ${t.featured ? "btn-primary" : "btn-ghost"} price-cta`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
