export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="reveal delay-1">
            Build smarter business workflows<br className="br-lg" /> with{" "}
            <span className="grad-text">AI &amp; automation.</span>
          </h1>
          <p className="hero-sub reveal delay-2">
            We don&apos;t sell AI gimmicks that fail in the real world. We build actual
            automation that helps you save time and money — intelligent software that
            eliminates repetitive work and accelerates growth.
          </p>
          <div className="hero-cta reveal delay-3">
            <a href="#reach" className="btn btn-primary btn-lg">
              Book a Free Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#services" className="btn btn-ghost btn-lg">View Our Solutions</a>
          </div>
          <div className="hero-stats reveal delay-4">
            <div className="stat">
              <span className="stat-num"><span data-count="14">0</span></span>
              <span className="stat-label">Automation disciplines</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num"><span data-count="13">0</span>+</span>
              <span className="stat-label">Industries served</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num"><span data-count="7">0</span>-day</span>
              <span className="stat-label">Support cover</span>
            </div>
          </div>
        </div>

        {/* animated workflow graph */}
        <div className="hero-visual reveal delay-2" aria-hidden="true">
          <svg className="flow-svg" viewBox="0 0 560 480" fill="none">
            <path className="wire" id="w1" d="M96 120 C 190 120, 200 220, 268 232" />
            <path className="wire" id="w2" d="M96 240 C 170 240, 190 236, 268 240" />
            <path className="wire" id="w3" d="M96 360 C 190 360, 200 260, 268 248" />
            <path className="wire" id="w4" d="M348 240 C 410 240, 420 150, 470 142" />
            <path className="wire" id="w5" d="M348 240 C 410 240, 420 330, 470 338" />

            <circle className="pulse" r="4">
              <animateMotion dur="2.6s" repeatCount="indefinite"><mpath href="#w1" /></animateMotion>
            </circle>
            <circle className="pulse" r="4">
              <animateMotion dur="2.6s" begin="0.9s" repeatCount="indefinite"><mpath href="#w2" /></animateMotion>
            </circle>
            <circle className="pulse" r="4">
              <animateMotion dur="2.6s" begin="1.7s" repeatCount="indefinite"><mpath href="#w3" /></animateMotion>
            </circle>
            <circle className="pulse pulse-out" r="4">
              <animateMotion dur="2.2s" begin="0.5s" repeatCount="indefinite"><mpath href="#w4" /></animateMotion>
            </circle>
            <circle className="pulse pulse-out" r="4">
              <animateMotion dur="2.2s" begin="1.6s" repeatCount="indefinite"><mpath href="#w5" /></animateMotion>
            </circle>
          </svg>

          {/* input nodes */}
          <div className="flow-node node-in" style={{ "--x": 0, "--y": 78 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6L22 7" />
            </svg>
            <span>Inbox</span>
          </div>
          <div className="flow-node node-in" style={{ "--x": 0, "--y": 198 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" />
            </svg>
            <span>Documents</span>
          </div>
          <div className="flow-node node-in" style={{ "--x": 0, "--y": 318 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Questions</span>
          </div>

          {/* core Axora node */}
          <div className="flow-core">
            <div className="core-ring"></div>
            <div className="core-body">
              <span className="core-title">AXORA</span>
            </div>
          </div>

          {/* output nodes */}
          <div className="flow-node node-out" style={{ "--x": 434, "--y": 100 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>Clean data</span>
          </div>
          <div className="flow-node node-out" style={{ "--x": 434, "--y": 296 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4z" />
            </svg>
            <span>Ready to send</span>
          </div>
        </div>
      </div>
      <div className="hero-fade" aria-hidden="true"></div>
    </section>
  );
}
