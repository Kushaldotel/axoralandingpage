const highlights = [
  ["14", "Automation disciplines"],
  ["13+", "Industries served"],
  ["7-day", "Support cover"],
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <div className="section-head section-head-left reveal">
            <span className="eyebrow">Who we are</span>
            <h2>More than a technology company — your innovation partner.</h2>
            <p>
              At Axora, we help businesses work smarter by building intelligent software, AI
              solutions and automation systems that eliminate repetitive work and accelerate
              growth.
            </p>
            <p>
              We believe technology should simplify your business — not complicate it. That&apos;s
              why we design custom solutions that integrate seamlessly into your existing
              operations, allowing your team to focus on what matters most.
            </p>
            <p>
              Our engineers, developers, designers and AI specialists work closely with every
              client to understand their goals and build technology that is scalable, secure,
              and built for the future.
            </p>
          </div>
        </div>

        <div className="about-panel reveal delay-1">
          <div className="about-stats">
            {highlights.map(([value, label]) => (
              <div className="about-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p className="about-note">
            Whether you&apos;re automating workflows, building custom software, developing
            AI-powered tools or modernising your digital infrastructure, we combine technical
            expertise with a deep understanding of business challenges to deliver solutions
            that create <em>measurable results</em>.
          </p>
        </div>
      </div>
    </section>
  );
}
