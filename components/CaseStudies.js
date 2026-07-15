const cases = [
  {
    delay: "",
    href: "/EICR_Portfolio.pdf",
    tag: "Lead Automation",
    title: "EICR Lead Automation",
    body:
      "An AI layer over a UK electrical firm's inbox: sorts real leads from noise, extracts the eight fields needed to quote, and drafts the reply with a branded quote PDF attached.",
    metrics: [
      ["Hours → Seconds", "response time"],
      ["~15 → ~2 min", "admin per lead"],
      ["40+ / week", "leads handled"],
    ],
  },
  {
    delay: " delay-1",
    href: "/DocExtraction_Portfolio.pdf",
    tag: "Data Extraction",
    title: "Document Data Extraction",
    body:
      "Messy documents in, clean structured data out. Reads any layout — invoices, receipts, certificates — validates its own work, and flags only what it's unsure about.",
    metrics: [
      ["Minutes → Seconds", "per document"],
      ["Only the unsure", "needs review"],
      ["Hundreds / day", "handled"],
    ],
  },
  {
    delay: " delay-2",
    href: "/AISupport_Portfolio.pdf",
    tag: "AI Assistant",
    title: "AI Support Assistant",
    body:
      "Answers customer questions from the business's own documents with a source attached to every answer — and hands off cleanly to a person instead of guessing.",
    metrics: [
      ["Instant", "response time"],
      ["Zero", "made-up answers"],
      ["Freed up", "your team"],
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="section section-alt" id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Case studies</span>
          <h2>
            Real systems, shipped<br className="br-lg" /> and working.
          </h2>
          <p>
            Three builds that show how we work — the problem, the system, and the numbers.
            Full write-ups available as PDFs.
          </p>
        </div>

        <div className="case-grid">
          {cases.map((c) => (
            <a className={`case-card reveal${c.delay}`} href={c.href} target="_blank" rel="noopener noreferrer" key={c.title}>
              <div className="case-top">
                <span className="case-tag">{c.tag}</span>
                <span className="case-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="case-metrics">
                {c.metrics.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <span className="case-link">Read the case study</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
