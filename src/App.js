import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header/Header";
import "./index.css";
import Page1 from "./components/Homeweb/page1";
import Page2 from "./components/Homeweb/page2";
import Page3 from "./components/Homeweb/page3";
import Page4 from "./components/Homeweb/page4";
import Page5 from "./components/Homeweb/page5";
import Page6 from "./components/Homeweb/page6";
import Page7 from "./components/Homeweb/page7";
import Page8 from "./components/Homeweb/page8";
import Page9 from "./components/Homeweb/page9";
import AboutPage1 from "./components/About Us/aboutpage1";
import AboutPage2 from "./components/About Us/aboutpage2";
import AboutPage3 from "./components/About Us/aboutpage3";
import ServicesPage1 from "./components/Services/servicespage1";
import ServicesPage2 from "./components/Services/servicespage2";







export default function App() {
  return (
    <div className="page">
      <main>
        <Router>
          <Routes>
                <Route 
                path="/home" 
                element={<><Header /><Page1 /><Page2 /><Page3 /><Page4 /><Page5 /><Page6 /><Page7 /><Page8 /><Page9 /></>} />
                <Route 
                path="/about" 
                element={<><Header /><AboutPage1 /><AboutPage2 /><AboutPage3/><Page8 /><Page9 /></>} />
                <Route 
                path="/services" 
                element={<><Header /><ServicesPage1/><ServicesPage2 /><Page8 /><Page9 /></>} />
          </Routes>
    </Router>
      </main>
    </div>
  );
}
