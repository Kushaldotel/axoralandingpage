/**
 * TODO: replace with real, attributable client quotes before launch.
 * Names are intentionally placeholders — publishing invented named reviews as
 * genuine is a legal/trust risk (UK CMA & ASA rules on fake reviews).
 */
const quotes = [
  {
    quote:
      "They understood our process before writing a line of code. The automation just slotted into how we already work — nothing had to change on our side.",
    name: "Placeholder Name",
    role: "Operations Director, Property Management",
  },
  {
    quote:
      "No gimmicks, no jargon. It quietly removed hours of admin every week, and the price was exactly what they quoted at the start.",
    name: "Placeholder Name",
    role: "Managing Director, Trade Services",
  },
  {
    quote:
      "The proposal told us exactly what we'd get, when, and for how much. It shipped on time and they've supported it ever since.",
    name: "Placeholder Name",
    role: "Founder, Recruitment Agency",
  },
];

const quoteMark = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 0 1 7.17 9.5zM18.17 6A5.17 5.17 0 0 0 13 11.17V18h6.83v-6.83H16.5a1.67 1.67 0 0 1 1.67-1.67z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Testimonials</span>
          <h2>
            What it&apos;s like to work<br className="br-lg" /> with us.
          </h2>
          <p>
            Straight talk, agreed pricing, and a system that still works six months after launch.
          </p>
        </div>

        <div className="quote-grid">
          {quotes.map((q, i) => (
            <figure className={`quote-card reveal${i % 3 ? ` delay-${i % 3}` : ""}`} key={q.role}>
              <span className="quote-mark" aria-hidden="true">{quoteMark}</span>
              <blockquote>{q.quote}</blockquote>
              <figcaption>
                <strong>{q.name}</strong>
                <span>{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
