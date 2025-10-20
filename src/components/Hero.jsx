import React from "react";

export default function Hero() {
  return (
    <section className="hero starfield">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1>
            Build Your <span className="text-accent">Digital</span><br />
            Solution Faster
          </h1>

          <p className="hero__sub">
            From AI-Powered Insights to Engaging Experiences — <br />
            Your Partner in Intelligent, Automated Digital Innovation
          </p>

          <div className="hero__actions">
            <button className="btn btn--primary">Book 15 minutes call</button>
          </div>
        </div>

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
    </section>
  );
}
