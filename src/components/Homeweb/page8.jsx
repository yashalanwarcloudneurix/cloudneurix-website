// src/components/Homeweb/page8.jsx
import React from "react";
import "./page8.css";

const TESTIMONIALS = [
  {
    title: "Awesome Experience",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    name: "Miss Sheila Wilkinson",
    role: "Principal",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "Awesome Experience",
    text: "Lorem Ipsum is simply dummy text. It has been the industry's standard since the 1500s.",
    name: "Irvin Corwin",
    role: "Director",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "Awesome Experience",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Reliable and fast.",
    name: "Alejandro Beier",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    title: "Awesome Experience",
    text: "Excellent work and communication. The team delivered ahead of schedule.",
    name: "Floyd Brown",
    role: "Forward",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function Page8() {
  return (
    <section className="p8">
      <div className="p8__inner">
        <header className="p8__head">
          <h2 className="p8__title">What Our <span className="p8__accent">Clients Say</span></h2>
          <p className="p8__sub">Don't just take our word for it. Here's what entrepreneurs and businesses have achieved using our platform.</p>
        </header>

        <div className="p8__list" role="list">
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className="p8__card" role="listitem">
              <h3 className="p8__cardTitle">{t.title}</h3>
              <p className="p8__cardText">{t.text}</p>

              <div className="p8__meta">
                <img className="p8__avatar" src={t.avatar} alt={t.name} />
                <div>
                  <div className="p8__name">{t.name}</div>
                  <div className="p8__role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
