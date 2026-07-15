"use client";

import { useEffect } from "react";

// Scroll reveals, animated counters, and card spotlight.
// Renders nothing; wires up DOM behavior after hydration.
export default function ScrollFX() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];

    const revealEls = document.querySelectorAll(".reveal");
    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add("visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    const counters = document.querySelectorAll("[data-count]");
    const animateCount = (el) => {
      const target = parseInt(el.dataset.count, 10);
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (prefersReducedMotion) {
      counters.forEach((el) => (el.textContent = el.dataset.count));
    } else {
      const countIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              countIO.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => countIO.observe(el));
      cleanups.push(() => countIO.disconnect());
    }

    if (!prefersReducedMotion && matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll(".card").forEach((card) => {
        const onMove = (e) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        };
        card.addEventListener("pointermove", onMove);
        cleanups.push(() => card.removeEventListener("pointermove", onMove));
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
