import React from "react";
import "./page1.css";


export default function Page1() {
//   const heroImg = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1400&auto=format&fit=crop";

  const logos = [
    // replace with your real logos or local imports
    "https://via.placeholder.com/110x40?text=ck-12",
    "https://via.placeholder.com/110x40?text=Garnish",
    "https://via.placeholder.com/110x40?text=Penfed",
    "https://via.placeholder.com/110x40?text=Allinweb",
    "https://via.placeholder.com/110x40?text=GW-GPT",
  ];

  return (
    <section className="page1">
      <div className="page1__inner">

        <div className="page1__hero">
          <div className="page1__heroLeft">
            <h1 className="page1__title">
              Build Your <span className="page1__accent">Digital</span> Solution Faster
            </h1>
            <p className="page1__subtitle">
              From AI-Powered Insights to Engaging Experiences — Your Partner in Intelligent, Automated Digital Innovation.
            </p>

            <div className="page1__actions">
              <a className="page1__primary" href="#book">Book 15 minutes call</a>
            </div>
          </div>

          {/* <div className="page1__heroRight">
            <div className="page1__imageWrap">
              <img src={heroImg} alt="Hero preview" />
            </div>
          </div> */}
          <div className="hero__media">
          <div className="hero__card">
            {/* Replace src with your own image if you want */}
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop"
              alt="Happy client at computer"
            />
          </div>
        </div>
        </div>
        <div className="page1__logos" aria-hidden>
          {logos.map((src, i) => (
            <div className="page1__logo" key={i}>
              <img src={src} alt={`logo-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
