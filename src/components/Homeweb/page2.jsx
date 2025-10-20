import React from "react";
import "./page2.css";

/* Inline SVG icon components (small, lightweight) */
const IconAI = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 2v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.93 4.93l1.41 1.41" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.66 17.66l1.41 1.41" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconData = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M7 10h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M11 10h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M15 10h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const IconCloud = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M20 16.58A4 4 0 0 0 16 12h-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 16h9a3 3 0 0 0 0-6 5 5 0 0 0-9.9 1.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconEmerging = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M6 8l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const IconWeb = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M2 12h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M12 2a20 20 0 0 1 0 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M12 2a20 20 0 0 0 0 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const IconDesign = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 21l3-3 4 1 8-8 2-2-6-6-2 2-8 8 1 4-3 3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Services array references icon components */
const SERVICES = [
  { title: "Generative AI", desc: "Unlock next-gen creativity with custom text, image, code, and video generators. Scale content and automate creative workflows.", Icon: IconAI },
  { title: "AI, ML & Data Analytics", desc: "Automate data pipelines, build end-to-end ML models, predictive analytics, and interactive dashboards for real-time insights.", Icon: IconData },
  { title: "Cloud & DevOps Services", desc: "Migrate to GCP/AWS/Azure, IaC, CI/CD, 24×7 operations & monitoring. Improve reliability and optimize costs.", Icon: IconCloud },
  { title: "Emerging Technology", desc: "Harness Blockchain, IoT, AR/VR, and Digital-Twin solutions. Future-proof your business with next-gen platforms.", Icon: IconEmerging },
  { title: "Web Development", desc: "Craft responsive, high-performance web apps and REST/GraphQL APIs using modern frameworks and secure best practices.", Icon: IconWeb },
  { title: "UI/UX Design", desc: "Design human-centered interfaces and rapid prototypes. Improve accessibility, consistency, and brand experience.", Icon: IconDesign },
];

export default function Homeweb() {
  return (
    <section className="p2">
      <div className="p2__shell">
        <header className="p2__head">
          <h2 className="p2__title">What Your <span className="p2__accent">Business</span> Needs</h2>
          <p className="p2__subtitle">
            Our platform offers a comprehensive suite of services to help you build, launch, and scale your digital solutions.
          </p>
        </header>

        <div className="p2__grid">
          {SERVICES.map((s) => (
            <article className="p2__card" key={s.title}>
              <div className="p2__icon" aria-hidden>
                {/* icon color uses currentColor; we set color via CSS for accent */}
                <s.Icon />
              </div>

              <div style={{ flex: 1 }}>
                <h3 className="p2__cardTitle">{s.title}</h3>
                <p className="p2__cardDesc">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="p2__ctaWrap">
          <a className="p2__cta" href="#services">Explore More <span className="p2__arrow">➜</span></a>
        </div>

        <div className="p2__notch" />
      </div>
    </section>
  );
}
