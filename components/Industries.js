import { Icon } from "./Icons";

const industries = [
  { icon: "userCheck", name: "Recruitment" },
  { icon: "home", name: "Property Management" },
  { icon: "wrench", name: "Electrical & Trade Services" },
  { icon: "health", name: "Healthcare" },
  { icon: "utensils", name: "Hospitality & Restaurants" },
  { icon: "store", name: "Retail" },
  { icon: "briefcase", name: "Professional Services" },
  { icon: "money", name: "Accounting & Finance" },
  { icon: "building", name: "Construction" },
  { icon: "factory", name: "Manufacturing" },
  { icon: "truck", name: "Logistics" },
  { icon: "book", name: "Education" },
];

export default function Industries() {
  return (
    <section className="section section-alt" id="industries">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Industries we help</span>
          <h2>
            Deep domain understanding —<br className="br-lg" /> not one-size-fits-all software.
          </h2>
          <p>
            We learn how your industry actually runs before we automate any of it. These are the
            sectors we work in most.
          </p>
        </div>

        <div className="ind-grid">
          {industries.map((ind, i) => (
            <div className={`ind-item reveal${i % 4 ? ` delay-${i % 4}` : ""}`} key={ind.name}>
              <span className="ind-icon">
                <Icon name={ind.icon} />
              </span>
              <h3>{ind.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
