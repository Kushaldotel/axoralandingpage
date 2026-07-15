import CalendlyWidget from "./CalendlyWidget";

const check = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function Reach() {
  return (
    <section className="section reach" id="reach">
      <div className="container">
        <div className="reach-panel reveal">
          <div className="reach-copy">
            <span className="eyebrow">Reach us</span>
            <h2>Let&apos;s find the hours hiding in your workflow.</h2>
            <p>
              Book a free 30-minute call. We&apos;ll look at how enquiries, documents and
              questions flow through your business and tell you honestly what&apos;s worth
              automating — and what isn&apos;t.
            </p>
            <ul className="reach-list">
              <li>{check} Free, no obligation</li>
              <li>{check} Honest advice on what to automate first</li>
              <li>{check} A clear next step, whether you work with us or not</li>
            </ul>
            <p className="reach-mail">
              Prefer email? <a href="mailto:hello@axora.solutions">hello@axora.solutions</a>
            </p>
          </div>
          <div className="reach-widget">
            <CalendlyWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
