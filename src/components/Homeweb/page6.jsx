import React from "react";
import "./page6.css";

export default function Page6() {
  const STATS = [
    { value: "3,000+", label: "Successful Projects" },
    { value: "23+", label: "Countries Supported" },
    { value: "236+", label: "Active Client" },
    { value: "15+", label: "Years of Experience" },
  ];

  return (
    <section className="achievements">
      <div className="achievements__inner">
        {/* Left intro */}
        <div className="achievements__intro">
          <h3 className="achievements__title">
            <span className="brand">CloudNeurix</span> Achievements
          </h3>

          <p className="achievements__lead">
            We take pride in empowering businesses worldwide with innovative solutions.
          </p>

          <p className="achievements__desc">
            <strong>CloudNeurix</strong> brings an unwavering commitment to excellence, backed by a global presence.
          </p>

          <a className="achievements__cta" href="#contact">Get In Touch ➜</a>
        </div>

        {/* Right stats */}
        <div className="achievements__stats">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
