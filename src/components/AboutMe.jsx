import React from "react";
import "../css/AboutMe.css";
import AboutMePic from "../assets/AboutMe.jpg";
import AboutMeTitle from "../assets/AboutMeTitle.jpg";
import AboutmeText from "../assets/AboutMeText.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <img src={AboutMeTitle} className="about-me__title" />
      <img src={AboutMePic} className="about-me__pic" />
      <img src={AboutmeText} className="about-me__text" />
    </div>
  );
}

export default AboutMe;
