import React from "react";
import "../css/Home.css";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import logo from "../assets/Logo.jpg";

function Home() {
  return (
    <div className="landing">
      <div className="landing__title-parent">
        <img src={logo} className="logo" />
      </div>
      <NavBar />
      <div className="main__profile"></div>
      <AboutMe />
    </div>
  );
}

export default Home;
