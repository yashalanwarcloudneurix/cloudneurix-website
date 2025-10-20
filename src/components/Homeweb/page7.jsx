// src/components/Homeweb/page7.jsx
import React from "react";
import "./page7.css";

const IMGS = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
];

export default function Page7() {
  return (
    <section className="p7">
      <div className="p7__panel">
        <div className="p7__left">
          <h2 className="p7__title">
            Our <span className="p7__accent">Latest Blog</span>
          </h2>
          <p className="p7__subtitle">
            Our platform offers a comprehensive suite of services to help you
            build, launch, and scale your digital solutions.
          </p>

          <a className="p7__cta" href="#blogs">See All Blogs ➜</a>
        </div>

        <div className="p7__mosaic" aria-hidden>
          <div className="p7__col">
            <div className="p7__tile p7__tile--small">
              <img src={IMGS[0]} alt="" />
            </div>
            <div className="p7__tile p7__tile--med">
              <img src={IMGS[1]} alt="" />
            </div>
            <div className="p7__tile p7__tile--med">
              <img src={IMGS[2]} alt="" />
            </div>
          </div>

          <div className="p7__col">
            <div className="p7__tile p7__tile--med">
              <img src={IMGS[3]} alt="" />
            </div>
            <div className="p7__tile p7__tile--small stacked">
              <img src={IMGS[4]} alt="" />
            </div>
            <div className="p7__tile p7__tile--small">
              <img src={IMGS[5]} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
