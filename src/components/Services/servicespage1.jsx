// import React from "react";
// import "./servicespage1.css";

// export default function ServicesPage1() {
//   return (
    
//     <div className="services-container">
        
//         <div className="header">
//             <h1>Reliable IT</h1>
//         </div>
//         <div className="page">
//             <h1> Services for Your Organization.</h1>
//             <img src="/2147656715 1.png" alt="" />
//         </div>
//     </div>
//   );
// }
// servicespage1.jsx
import "./servicespage1.css";

export default function ServicesPage1() {
  return (
    <div className="service-banner">
        <div className="overlay-text">
            <div className="head">
                <h1>Reliable IT</h1>

            </div>
            <h1>Services for Your <br />Organization.</h1>
            <ul>
            <li>✅ 98% Customer Satisfaction Rate</li>
            <li>🛠️ On-Site and Remote Assistance</li>
            <li>👨‍💻 24/7 Access to Expert IT Support</li>
            </ul>
            <button className="cta">Book 15 Minutes Call</button>
      </div>
      <div className="image-container">
        <img src="/2147656715 1.png" alt="IT Services" />
      </div>
    </div>
    
    
  );
}
