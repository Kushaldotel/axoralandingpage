"use client";

import { useEffect, useRef } from "react";

const CALENDLY_URL =
  "https://calendly.com/YOUR_CALENDLY_USERNAME/30min?hide_gdpr_banner=1&background_color=0a101f&text_color=e6edf7&primary_color=22d3ee";

export default function CalendlyWidget() {
  const ref = useRef(null);

  useEffect(() => {
    const init = () => {
      if (window.Calendly && ref.current && !ref.current.hasChildNodes()) {
        window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: ref.current });
      }
    };

    if (window.Calendly) {
      init();
      return;
    }

    const existing = document.querySelector('script[src*="assets.calendly.com"]');
    if (existing) {
      existing.addEventListener("load", init);
      return () => existing.removeEventListener("load", init);
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.addEventListener("load", init);
    document.body.appendChild(script);
    return () => script.removeEventListener("load", init);
  }, []);

  return <div ref={ref} className="calendly-inline-widget" style={{ minWidth: 320, height: 640 }} />;
}
