import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="hdr">
      <div className="hdr__inner">
        {/* Brand */}
        <a href="/" className="hdr__brand" aria-label="CloudNeurix Home">
          <span className="hdr__logoText">
            Cloud<span className="accent">Neurix</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hdr__nav">
          <a className="active" href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#insights">Insights</a>
        </nav>

        {/* CTAs */}
        <div className="hdr__cta">
          <button className="btn btn--ghost">Hire Us</button>
          <button className="btn">Let’s Talk</button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="hdr__burger"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`hdr__mobile ${open ? "open" : ""}`}>
        <a onClick={() => setOpen(false)} href="#home">Home</a>
        <a onClick={() => setOpen(false)} href="#about">About Us</a>
        <a onClick={() => setOpen(false)} href="#services">Services</a>
        <a onClick={() => setOpen(false)} href="#portfolio">Portfolio</a>
        <a onClick={() => setOpen(false)} href="#insights">Insights</a>
        <div className="hdr__mobileCtas">
          <button className="btn btn--ghost">Hire Us</button>
          <button className="btn">Let’s Talk</button>
        </div>
      </div>
    </header>
    
  );
}
