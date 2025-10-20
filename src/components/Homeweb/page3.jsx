import React, { useState, useRef } from "react";
import "./page3.css";

/**
 * Simple industries carousel.
 * Replace image URLs with your own local images if you prefer (e.g. /assets/fintech.jpg).
 */

const INDUSTRIES = [
  {
    title: "Healthcare",
    subtitle: "Digital health platforms & telemedicine solutions.",
    img: "https://images.unsplash.com/photo-1581091215367-6b2d7d6a1e9f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Fintech",
    subtitle: "Banking, payments, trading platforms & security.",
    img: "https://images.unsplash.com/photo-1526378723370-2f6f3a6b7f2f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "E-Commerce",
    subtitle: "High-converting storefronts, marketplaces and integrations.",
    img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Real Estate",
    subtitle: "Proptech, listings platforms and marketplace tooling.",
    img: "https://images.unsplash.com/photo-1505842465776-3a1b4f64f3cf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Automobile",
    desc: "Empowering automotive innovation with AI-based analytics, IoT tracking, and smart manufacturing solutions.",
    img: "https://images.unsplash.com/photo-1581093588401-22d498a35d2c?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Telecommunication",
    desc: "Building reliable network analytics, monitoring dashboards, and 5G-ready digital infrastructure.",
    img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&q=60",
  },
];

export default function Page3() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const prev = () => {
    setIndex((i) => Math.max(0, i - 1));
    scrollToIndex(index - 1);
  };

  const next = () => {
    setIndex((i) => Math.min(INDUSTRIES.length - 1, i + 1));
    scrollToIndex(index + 1);
  };

  const scrollToIndex = (i) => {
    const clamped = Math.max(0, Math.min(INDUSTRIES.length - 1, i));
    const track = trackRef.current;
    if (!track) return;
    // card width + gap from CSS: we calculate by first child
    const card = track.querySelector(".ind__card");
    if (!card) return;
    const cardWidth = card.offsetWidth + parseFloat(getComputedStyle(track).gap || 16);
    track.scrollTo({ left: cardWidth * clamped, behavior: "smooth" });
    setIndex(clamped);
  };

  return (
    <section className="ind">
      <div className="ind__wrap">
        <h3 className="ind__title">
          <span className="ind__accent">Industries</span> we work with
        </h3>

        <div className="ind__controls">
          <button className="ind__arrow" onClick={prev} aria-label="previous" disabled={index === 0}>
            ‹
          </button>
          <button className="ind__arrow" onClick={next} aria-label="next" disabled={index === INDUSTRIES.length - 1}>
            ›
          </button>
        </div>

        <div className="ind__track" ref={trackRef}>
          {INDUSTRIES.map((it, i) => (
            <div className="ind__card" key={it.title}>
              <div className="ind__imgWrap">
                <img src={it.img} alt={it.title} />
              </div>
              <div className="ind__content">
                <h4>{it.title}</h4>
                <p>{it.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ind__ctaWrap">
          <a className="ind__cta" href="#contact">
            Let's Talk Business ➜
          </a>
        </div>
      </div>
    </section>
  );
}
