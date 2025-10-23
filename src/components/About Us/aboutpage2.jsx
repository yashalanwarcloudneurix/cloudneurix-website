import React from "react";
import "./aboutpage2.css";

/**
 * AboutPage2 component
 * - Expects images in public/assets/:
 *    /assets/story.jpg
 *    /assets/logo-ck12.png
 *    /assets/logo-garnish.png
 *    /assets/logo-penfed.png
 */
export default function AboutPage2() {
  return (
    <section className="ap2-root">
      <div className="ap2-inner">
        <div className="ap2-left">
          <div className="ap2-media-wrap">
            <img
              className="ap2-image"
              src="https://cdn.pixabay.com/photo/2022/06/22/20/35/team-7278739_1280.jpg"
              alt="Team meeting"
            />
          </div>
        </div>

        <div className="ap2-right">
          <h3 className="ap2-title">Our Story</h3>

          <div className="ap2-copy">
            <p>
              Founded in 2018 by AI veteran Muhammad (LastName), CLOUDNEURIX began
              as a small lab focused on simplifying complex data challenges. What
              started as weekend hackathons evolved into full-scale generative AI
              experiments powering automated billing, writing and prototype design.
            </p>

            <p>
              By 2020, we onboarded our first enterprise client in Healthcare,
              and today we serve globally across Healthcare, Fintech, E-Commerce,
              Education, Logistics & Supply Chain, and PropTech — transforming how
              businesses innovate with AI, cloud, and seamless user experiences.
            </p>
          </div>

          <button className="ap2-cta">Book 15 minutes call</button>

          
        </div>
      </div>
      <div className="ap2">
        <div className="ap2-logos" aria-hidden="true">
            <img src="/assets/logo-ck12.png" alt="CK-12" />
            <img src="/assets/logo-garnish.png" alt="Garnish" />
            <img src="/assets/logo-penfed.png" alt="PenFed" />
          </div>
      </div>
    </section>
  );
}
