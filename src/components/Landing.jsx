import React from "react";
import "./Landing.css";
import NavBar from "./NavBar";
// import Socials from "./Socials";
import MainLandingContent from "./MainLandingContent";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__title-parent">
        <div className="landing__title">+2 Creative</div>
        {/* <div className="landing__subtitle">
          Wedding and Specialty Event by Alisha Hendricks
        </div> */}
      </div>
      {/* <Socials /> */}
      <NavBar />
      {/* <hr className="title__divider"></hr> */}
      <MainLandingContent />
    </div>
  );
}

export default Landing;
