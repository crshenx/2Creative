import React from "react";
import "../css/Home.css";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import logo from "../assets/Logo.jpg";
import banner from "../assets/newHomeBanner.jpg";
import BridalConcierge from "./BridalConcierge";
import Planning from "./Planning";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div className="home">
      <div className="home__title">
        <img src={logo} className="home__title-logo" />
      </div>
      <NavBar />
      {/* <div className="home__banner"></div> */}
      <img className="banner" src={banner} alt="" />
      <AboutMe />
      <BridalConcierge />
      <Planning />
      <Testimonials />
    </div>
  );
}

export default Home;
