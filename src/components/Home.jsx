import React from "react";
import "../css/Home.css";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import logo from "../assets/Logo.jpg";
import bener from "../assets/AlishaBanner4.jpg";
import BridalConcierge from "./BridalConcierge";
import Planning from "./Planning";

function Home() {
  return (
    <div className="home">
      <div className="home__title">
        <img src={logo} className="home__title-logo" />
      </div>
      <NavBar />
      {/* <div className="home__banner"></div> */}
      <img className="banner" src={bener} alt="" />
      <AboutMe />
      <BridalConcierge />
      <Planning />
    </div>
  );
}

export default Home;
