import React from "react";
import "./Landing.css";
import NavBar from "./NavBar";
// import Socials from "./Socials";
import MainLandingContent from "./MainLandingContent";
import logo from "../assets/2creativelogo.png";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__title-parent">
        <img src={logo} className="logo" />
        {/* <div className="landing__title">+2 Creative</div> */}
        {/* <div className="landing__subtitle">
          Wedding and Specialty Event by Alisha Hendricks
        </div> */}
        <NavBar />
      </div>
      {/* <Socials /> */}
      {/* <hr className="title__divider"></hr> */}
      <MainLandingContent />
    </div>
  );
}

export default Landing;
