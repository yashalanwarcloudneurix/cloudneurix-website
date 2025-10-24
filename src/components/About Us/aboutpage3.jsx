// import React from "react";
// import "./aboutpage3.css";

// export default function AboutPage2() {
//   return(
//     <section className="page3">
//         <div className="head">
//           <h2>Team <span>behind our Success</span></h2>
//         </div>
//         <div className="image_row1">
//           <div className="image1">
//             <img src="/Frame 1000009824.png" alt="" />
//             <h4>Muhammad Frooq</h4>
//             <p>Founder & CEO</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, officia.</p>
//             <img src="/Untitled-5.png" alt="" />
//             <h4>Muhammad Frooq</h4>
//             <p>Founder & CEO</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, officia.</p>
//           </div>
//           <div className="image1">
            
//           </div>
//           <div className="image1">
//             <img src="/Untitled-4.png" alt="" />
//             <h4>Muhammad Frooq</h4>
//             <p>Founder & CEO</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, officia.</p>
//           </div>
//           <div className="image1">
//             <img src="/Untitled-3.png" alt="" />
//             <h4>Muhammad Frooq</h4>
//             <p>Founder & CEO</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, officia.</p>
//           </div>

//         </div>
//         <div>
          
//         </div>
//         <div className="image_row2">
//           <div className="image2">
//             <img src="/Layer 7 1.png" alt="" />
//             <h4>Muhammad Frooq</h4>
//             <p>Founder & CEO</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, officia.</p>
//           </div>
//           <div className="image2">
//             <img src="/Layer 3 1.png" alt="" />
//             <h4>Muhammad Frooq</h4>
//             <p>Founder & CEO</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, officia.</p>
//           </div>
//           <div className="image2">
//             <img src="/Layer-2 1.png" alt="" />
//             <h4>Muhammad Frooq</h4>
//             <p>Founder & CEO</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, officia.</p>
//           </div>
//           <div className="image2">
//             <img src="/image 28.png" alt="" />
//             <h4>Muhammad Frooq</h4>
//             <p>Founder & CEO</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, officia.</p>
//           </div>
//         </div>


        
        
//     </section>
//   );
// }
import React from "react";
import "./aboutpage3.css";

const teamMembers = [
  {
    name: "Muhammad Farooq",
    title: "Founder & CEO",
    desc: "15+ years of AI research and enterprise architecture at leading tech firms.",
    img: "/Frame 1000009824.png",
  },
  {
    name: "Ali Hussnain",
    title: "CTO",
    desc: "Former Google Cloud engineer turned DevOps and scalability expert.",
    img: "/Untitled-5.png",
  },
  {
    name: "Umar Farooq",
    title: "Head of UX/UI",
    desc: "Award-winning designer with a background in human-computer interaction.",
    img: "/Untitled-4.png",
  },
  {
    name: "Ahmed Ali",
    title: "Full Stack Developer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/Untitled-3.png",
  },
  {
    name: "Hamza Naeem",
    title: "WordPress Developer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/Layer 7 1.png",
  },
  {
    name: "Yashal Anwar",
    title: "Associate Software Engineer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/Layer 3 1.png",
  },
  {
    name: "Anum Naseer",
    title: "Business Developer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/Layer-2 1.png",
  },
  {
    name: "Ayesha Javed",
    title: "AI Engineer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "/image 28.png",
  },
];

export default function AboutPage3() {
  return (
    <div className="about-container">
      <h2 className="about-title">
        <span>Team</span> behind our Success
      </h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.img} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-title">{member.title}</p>
            <p className="team-desc">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
