import { Icon } from "./Icons";

const items = [
  {
    icon: "sparkles",
    title: "Custom built solutions",
    body: "Built around your processes and your data — designed for how your business actually works.",
  },
  {
    icon: "workflow",
    title: "No generic templates",
    body: "Nothing off the shelf, nothing forced to fit. Every system is designed for your business from the start.",
  },
  {
    icon: "shield",
    title: "Secure & scalable",
    body: "Architected to grow with you and built secure from the first commit — your data stays yours.",
  },
  {
    icon: "rocket",
    title: "Fast delivery",
    body: "Tight scope and close collaboration mean you see working software in weeks, not quarters.",
  },
  {
    icon: "clock",
    title: "7-days support",
    body: "We're reachable every day of the week — not just inside office hours.",
  },
  {
    icon: "wrench",
    title: "Ongoing maintenance",
    body: "Bug fixes, updates and future enhancements keep your system reliable as your business changes.",
  },
  {
    icon: "cpu",
    title: "AI experts",
    body: "Engineers and AI specialists who ship production systems — not no-code demos that break in a month.",
  },
  {
    icon: "tag",
    title: "Transparent pricing",
    body: "Scope and price agreed upfront. No surprises, no creeping invoices, no hidden extras.",
  },
];

export default function Why() {
  return (
    <section className="section section-alt" id="why">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Why Axora</span>
          <h2>
            Automation you can actually<br className="br-lg" /> put in front of a customer.
          </h2>
          <p>
            Most AI demos fall apart on real work. Ours are built on real engineering — and on
            being straight with you about scope, price and what the system can do.
          </p>
        </div>

        <div className="why-grid">
          {items.map((item, i) => (
            <div className={`why-item reveal${i % 4 ? ` delay-${i % 4}` : ""}`} key={item.title}>
              <div className="why-icon">
                <Icon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
