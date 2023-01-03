import React from "react";
import "./Landing.css";
import NavBar from "./NavBar";
// import Socials from "./Socials";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__title-parent">
        <div className="landing__title">+2 Creative</div>
        <div className="landing__subtitle">by Alisha Hendricks</div>
      </div>
      {/* <Socials /> */}
      <NavBar />
      <hr className="title__divider"></hr>
    </div>
  );
}

export default Landing;
