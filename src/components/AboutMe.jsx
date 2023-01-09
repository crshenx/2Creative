import React from "react";
import "../css/AboutMe.css";
import AboutMePic from "../assets/AboutMePortrait.jpg";
import AboutMeTitle from "../assets/AboutMeTitle.jpg";
import AboutmeText from "../assets/AboutMeTextBackground.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__title-container">
        <img src={AboutMeTitle} className="about-me__title" />
      </div>
      {/* <div className="about-me__content"> */}
      <div className="about-me__background-pic">
        {/* <div className="about-me__text"> */}
        <img src={AboutMePic} className="about-me__pic" />
        <div className="about-me__hey-container">
          <h2 className="about-me__hey">hey</h2>
          <h2 className="about-me__hey-there">there</h2>
        </div>
        <p className="about-me__text-content">
          My name is Alisha and I love, love. I love people in love. It is
          actually that simple. It is also where my agenda starts and ends.
          There is nothing that fills me with more joy than helping create a
          joyous moment, experience, or memory for someone. I adore a good
          story! So I am incredibly blessed to have the opportunity to be a part
          of my couples' love stories during one of their most special chapters.
          It is actually unreal! As your Wedding/Event Planner or day of Bridal
          Concierge, my hope is that we come out of our experience together as
          new friends! I aim to work subtly and intimately behind the scenes to
          tell your story. To me, a wonderful event should showcase your story
          with those grand moments you always dreamed of, along with the more
          quiet and intimate pieces of your day. I want to assist you in
          arriving at your big day, whatever it is, as your true self! I am
          fully here for you. Please don’t hesitate to contact me, I would love
          to hear from you!
        </p>
        {/* </div> */}
      </div>
      {/* <img src={AboutmeText} className="about-me__text" /> */}
      {/* </div> */}
    </div>
  );
}

export default AboutMe;
