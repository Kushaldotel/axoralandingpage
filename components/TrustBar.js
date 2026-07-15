import { Icon } from "./Icons";

const items = [
  { icon: "sparkles", label: "Custom built — no generic templates" },
  { icon: "tag", label: "Transparent pricing agreed upfront" },
  { icon: "clock", label: "7-day support & ongoing maintenance" },
  { icon: "cpu", label: "Secure, scalable, real engineering" },
];

export default function TrustBar() {
  return (
    <section className="trustbar">
      <div className="container trustbar-inner reveal">
        {items.map((item) => (
          <div className="trust-item" key={item.label}>
            <Icon name={item.icon} />
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
