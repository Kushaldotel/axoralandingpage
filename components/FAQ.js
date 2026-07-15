const faqs = [
  {
    q: "How long does a project take?",
    a: "It depends on scope, but most focused automations go live within a few weeks. After the discovery call you get a proposal with a firm timeline and deliverables, so you know the schedule before development begins.",
  },
  {
    q: "Do you build custom software?",
    a: "Yes — custom software is our core work, with no generic templates. We design and build around your existing processes so the solution fits how your team already operates, rather than forcing you to change to fit the tool.",
  },
  {
    q: "Can you integrate with our CRM?",
    a: "Almost certainly. We regularly integrate with Microsoft 365, Outlook, Dynamics 365, Zoho CRM, Google Workspace, Slack, Teams, Zapier, n8n and Airtable — plus anything with a REST API. Where no integration exists, we build one.",
  },
  {
    q: "Do you offer support?",
    a: "Yes. 7-day support, ongoing maintenance, bug fixes and future enhancements are part of how we work. We keep your system secure, reliable and performing at its best as your business grows.",
  },
  {
    q: "Is AI secure?",
    a: "It is when it's built properly. We architect for security from the start: your data is encrypted, access is controlled, and we scope exactly what any AI component can read or do. Your business data is never used to train third-party models.",
  },
  {
    q: "What industries do you work with?",
    a: "Recruitment, property management, electrical and trade services, healthcare, hospitality, restaurants, retail, professional services, accounting, construction, manufacturing, logistics and education — among others.",
  },
];

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">FAQ</span>
          <h2>
            Questions we get<br className="br-lg" /> before the first call.
          </h2>
          <p>Anything else — just ask on the call. We&apos;ll tell you straight.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <details className={`faq-item reveal${i % 3 ? ` delay-${i % 3}` : ""}`} key={item.q}>
              <summary>
                {item.q}
                <span className="faq-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
