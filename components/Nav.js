"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="container nav-inner">
        <Logo gradId="logoGradNav" />
        <nav className={`nav-links${open ? " open" : ""}`} id="navLinks" aria-label="Primary">
          <a href="#services" onClick={close}>What We Do</a>
          <a href="#industries" onClick={close}>Industries</a>
          <a href="#work" onClick={close}>Our Work</a>
          <a href="#why" onClick={close}>Why Axora</a>
          <a href="#pricing" onClick={close}>Pricing</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a href="#reach" onClick={close} className="btn btn-sm btn-primary">Book a Call</a>
        </nav>
        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
