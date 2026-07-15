const steps = [
  {
    delay: "",
    num: "01",
    title: "Discovery call",
    body:
      "We take the time to understand your business, current processes and goals. This helps us identify where automation can create the most value.",
  },
  {
    delay: " delay-1",
    num: "02",
    title: "Solution proposal",
    body:
      "A detailed PDF proposal outlining the recommended solution, scope, timeline, deliverables, pricing and expected outcomes — agreed upfront, with complete transparency, so you know exactly what to expect before development begins.",
  },
  {
    delay: " delay-2",
    num: "03",
    title: "Development & revisions",
    body:
      "Our team builds your solution and carries out thorough testing. We work closely with you throughout, making revisions based on your feedback until the final product meets your requirements.",
  },
  {
    delay: " delay-3",
    num: "04",
    title: "Deployment, maintenance & support",
    body:
      "Once approved, we deploy with minimal disruption — then provide ongoing maintenance, technical support, bug fixes and future enhancements to keep your system secure, reliable and performing as your business grows.",
  },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container process-grid">
        <div className="process-copy">
          <div className="section-head section-head-left reveal">
            <span className="eyebrow">How it works</span>
            <h2>From first call to a system running in your business.</h2>
            <p>
              No six-month projects, no black boxes. Everything is agreed upfront with complete
              transparency — scope, timeline and price — so you know exactly what to expect
              before development begins.
            </p>
            <a href="#reach" className="btn btn-primary">Book a Free Consultation</a>
          </div>
        </div>
        <ol className="steps">
          {steps.map((s) => (
            <li className={`step reveal${s.delay}`} key={s.num}>
              <span className="step-num">{s.num}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
