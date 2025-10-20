import React from "react";

const LOGOS = [
  "ck-12", "Garnish", "PENFED", "Allinweb", "GW-GPT"
];

export default function Logos() {
  return (
    <section className="logos">
      <div className="logos__row">
        {LOGOS.map((name) => (
          <div key={name} className="logos__item">
            {/* Placeholder logo marks. Replace with your SVG/PNG later */}
            <span className="logos__dot" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
