import React from "react";
import "./page5.css";

const CASES = [
  {
    title: "Zenjob",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "CK-12 Educational",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Page5() {
  return (
    <section className="feat">
      <div className="feat__panel">
        <header className="feat__head">
          <h2 className="feat__title">
            Some Featured <span className="feat__accent">Work</span>
          </h2>
        </header>

        <div className="feat__grid">
          {CASES.map((c) => (
            <article className="feat__card" key={c.title}>
              <div className="feat__media">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="feat__body">
                <h3 className="feat__name">{c.title}</h3>
                <p className="feat__desc">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="feat__ctawrap">
          <a className="feat__cta" href="#case-studies">
            View All Case Studies ➜
          </a>
        </div>
      </div>
    </section>
  );
}
