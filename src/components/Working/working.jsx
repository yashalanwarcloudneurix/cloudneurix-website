import React, { useEffect, useState } from "react";
import "./working.css";

export default function Working() {
  // target date: 12 days from now (change as needed)
  const getTarget = () => {
    const t = new Date();
    t.setDate(t.getDate() + 30);
    // keep same hour/min/sec or set specific: t.setHours(0,0,0,0);
    return t;
  };

  const [target] = useState(getTarget);
  const [timeLeft, setTimeLeft] = useState(calcRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <main className="coming">
      <div className="coming__left">
        <div className="coming__brand" >Launcher</div>
        <h1 className="coming__title">COMING SOON</h1>

        <div className="coming__count" role="timer" aria-live="polite">
          <div className="coming__cell">
            <div className="coming__circle">{pad(timeLeft.days)}</div>
            <div className="coming__label">Days</div>
          </div>

          <div className="coming__cell">
            <div className="coming__circle">{pad(timeLeft.hours)}</div>
            <div className="coming__label">Hours</div>
          </div>

          <div className="coming__cell">
            <div className="coming__circle">{pad(timeLeft.minutes)}</div>
            <div className="coming__label">Minutes</div>
          </div>

          <div className="coming__cell">
            <div className="coming__circle">{pad(timeLeft.seconds)}</div>
            <div className="coming__label">Seconds</div>
          </div>
        </div>

        <p className="coming__lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          reprehenderit delectus quasi eligendi maiores consectetur repellat
          necessitatibus libero deleniti quaerat debitis, odit earum modi.
        </p>

        <div className="coming__social" aria-hidden="true">
          <a href="#facebook" aria-label="facebook" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#twitter" aria-label="twitter" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#instagram" aria-label="instagram" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

      </div>

      <aside className="coming__right" aria-hidden>
        <img
          src="\OIP (1).jpg"
          alt=""
        />
      </aside>
    </main>
  );
}

/* helpers */
function calcRemaining(target) {
  const now = new Date().getTime();
  const diff = Math.max(0, target.getTime() - now);

  const secondsTotal = Math.floor(diff / 1000);
  const days = Math.floor(secondsTotal / (3600 * 24));
  const hours = Math.floor((secondsTotal % (3600 * 24)) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = Math.floor(secondsTotal % 60);

  return { days, hours, minutes, seconds };
}

function pad(n) {
  return String(n).padStart(2, "0");
}
