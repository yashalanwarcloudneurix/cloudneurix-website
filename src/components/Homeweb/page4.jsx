import React from "react";
import "./page4.css";

/* small inline SVG icons (stroke uses currentColor) */
const IconBulb = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M9 18h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M10 22h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M12 2a6 6 0 0 0-4 10.5V14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.5A6 6 0 0 0 12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconPuzzle = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M9 14v5H6a2 2 0 0 1-2-2v-3h5zM15 10V5h3a2 2 0 0 1 2 2v3h-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 10a3 3 0 0 1 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export default function Page4() {
  return (
    <section className="how-section">
      <div className="how-inner">
        <header className="how-header">
          <h2 className="how-title">How We <span className="accent">Works</span></h2>
          <p className="how-sub">Turn your idea into a powerful digital solution in four simple steps.</p>
        </header>

        <div className="how-timeline">
          <div className="how-line" />

          {/* Step 1 (left) */}
          <div className="how-row">
            <div className="how-left">
              <div className="step-num">01</div>
              <h3 className="step-title">Define Your Use Case</h3>
              <p className="step-desc">Pick only the features you need from our marketplace. Each one is modular and pay-as-you-go.</p>
            </div>

            <div className="how-center">
              <div className="marker">
                <div className="marker-circle"><IconBulb /></div>
              </div>
            </div>

            <div className="how-right empty" />
          </div>

          {/* Connector curve (SVG) */}
          <svg className="connector connector-1" viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden>
            <path d="M10 10 C90 80, 110 80, 190 10" fill="none" stroke="rgba(46,163,255,0.12)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 8" />
          </svg>

          {/* Step 2 (right) */}
          <div className="how-row">
            <div className="how-left empty" />

            <div className="how-center">
              <div className="marker">
                <div className="marker-circle"><IconPuzzle /></div>
              </div>
            </div>

            <div className="how-right">
              <div className="step-num right">02</div>
              <h3 className="step-title">Select & Customize Features</h3>
              <p className="step-desc">Start with a tailored template or a blank canvas — we support solutions for every industry.</p>
            </div>
          </div>

          {/* You can add more rows/markers similarly (03/04) - below I'll replicate 03/04 visually like the image */}
          <svg className="connector connector-2" viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden>
            <path d="M10 110 C90 30, 110 30, 190 110" fill="none" stroke="rgba(46,163,255,0.12)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 8" />
          </svg>

          {/* Step 3 (left) */}
          <div className="how-row">
            <div className="how-left">
              <div className="step-num">03</div>
              <h3 className="step-title">Get Transparent Pricing & Timeline</h3>
              <p className="step-desc">Instantly view cost estimates and delivery schedules — no hidden charges, no surprises.</p>
            </div>

            <div className="how-center">
              <div className="marker">
                <div className="marker-circle"><IconBulb /></div>
              </div>
            </div>

            <div className="how-right empty" />
          </div>

          {/* Step 4 (right) */}
          <div className="how-row">
            <div className="how-left empty" />

            <div className="how-center">
              <div className="marker">
                <div className="marker-circle"><IconPuzzle /></div>
              </div>
            </div>

            <div className="how-right">
              <div className="step-num right">04</div>
              <h3 className="step-title">Track Progress in Real Time</h3>
              <p className="step-desc">Use your personalized dashboard to monitor development and stay in control from day one.</p>
            </div>
          </div>
        </div>

        <div className="how-cta">
          <a className="btn-primary" href="#contact">Let's Talk ➜</a>
        </div>
      </div>
    </section>
  );
}
