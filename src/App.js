import React from "react";
import Header from "./components/Header/Header";
import "./index.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Logos from "./components/Logos";
import Page1 from "./components/Homeweb/page1";
import Page2 from "./components/Homeweb/page2";
import Page3 from "./components/Homeweb/page3";
import Page4 from "./components/Homeweb/page4";
import Page5 from "./components/Homeweb/page5";
import Page6 from "./components/Homeweb/page6";
import Page7 from "./components/Homeweb/page7";
import Page8 from "./components/Homeweb/page8";
import Page9 from "./components/Homeweb/page9";



export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        {/* <Hero /> */}
        {/* <Logos /> */}
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
      </main>
    </div>
  );
}
