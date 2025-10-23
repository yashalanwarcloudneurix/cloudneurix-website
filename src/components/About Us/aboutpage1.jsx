import React from "react";
import "./aboutpage1.css";

export default function AboutPage1() {
  return (
    <section className="aboutpage container">
      <div className="about-left">
        <small className="heading"><h3>About Us</h3></small>
        <h2 className="headline">Fueling Business Success Through Bold Innovation</h2>

        <p className="intro">
          At <strong>CLOUDNEURIX</strong>, we specialize in transforming businesses with
          enterprise-grade software solutions tailored to their needs. With a legacy of
          technical excellence and a passion for innovation, we help organizations thrive
          in an ever-evolving digital landscape.
        </p>
        
        <h4>Mission:</h4>
          <p>
            To embed AI/innovation at every layer of digital transformation, empowering our
            clients to lead in tomorrow's data-driven world.
          </p>
        
        <h4>Vision:</h4>
          <p>
            To be the world’s most trusted partner for intelligent automation, cloud
            modernization, and human-centered design—turning bold ideas into scalable
            solutions.
          </p>

        <h4>Our Approach:</h4>
          <p>
            At CloudNeurix, we go beyond technology by blending strategy, design, and
            engineering into seamless solutions that launch fast, scale with your business,
            and evolve to keep you future-ready.
          </p>

        
        <button className="cta">Book 15 minutes call</button>
      </div>

      <div className="about-right">
        <div className="stat-card">
          <div className="stat-circle">21+</div>
          <div className="stat-text">Years of Experience</div>
        </div>

        <div className="image-stack">
          <div className="img img-top">
            <img src="/assets/about-1.jpg" alt="team collaboration" />
          </div>
          <div className="img img-bottom">
            <img src="/assets/about-2.jpg" alt="developer working" />
          </div>
        </div>
      </div>
    </section>
  );
}
