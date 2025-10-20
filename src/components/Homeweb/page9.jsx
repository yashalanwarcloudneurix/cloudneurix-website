import React from "react";
import "./page9.css";

export default function Page9() {
  return (
    <section className="page9" aria-labelledby="page9-heading">
      <div className="page9__panel">
        <div className="page9__top">
          <div className="page9__left">
            <small className="page9__lead">Tell us about your project</small>
            <h2 id="page9-heading" className="page9__title">
              Let's talk
            </h2>
          </div>

          <div className="page9__right">
            <label htmlFor="newsletter" className="page9__newsletterLabel">Sign Up for Our Newsletter</label>
            <div className="page9__newsletter">
              <input id="newsletter" type="email" placeholder="example@gmail.com" />
              <button aria-label="Subscribe" className="page9__send">➜</button>
            </div>
            <small className="page9__small">
              By subscribing, you're accept <a href="#privacy">Privacy Policy</a>
            </small>
          </div>
        </div>

        <hr className="page9__sep" />

        <div className="page9__middle">
          <div className="page9__cols">
            <div className="page9__col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>

            <div className="page9__col">
              <h4>Services</h4>
              <ul>
                <li><a href="#ai">Artificial Intelligence</a></li>
                <li><a href="#devops">DevOps & Cloud Services</a></li>
                <li><a href="#chatbots">AI Chatbots & Assistant</a></li>
                <li><a href="#web">Web Development</a></li>
                <li><a href="#mobile">Mobile Development</a></li>
                <li><a href="#uiux">UI/UX Design</a></li>
              </ul>
            </div>

            <div className="page9__col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#cases">Case study</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="page9__bottom">
          <div className="page9__brand">
            <span className="page9__brandDot" /> CloudNeurix
          </div>

          <div className="page9__copyright">
            © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
