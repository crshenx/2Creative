import React from "react";
import "../css/AboutMe.css";
import AboutMePic from "../assets/AboutMe.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <img src={AboutMePic} className="about-me__pic" />
      <p className="about-me__text">
        I photograph people in love. It is actually that simple. It is also
        where my agenda starts and ends. Nothing more, nothing less. I adore
        photography and I am so blessed to do this as my full-time job, it is
        actually unreal! As your photographer, my hope is that we come out of
        our experience together as new friends! I aim to tell your story by
        documenting those grand moments, along with the more quiet and intimate
        pieces of your life. I want to capture you as your true self — all the
        epic stories, laughs, and special memories that you will fondly look
        back upon. My goal as your intimate wedding and elopement photographer
        is to focus on capturing your story while making sure that your day
        reflects the authenticity of you as a couple. I am fully here for you.
        Please don’t hesitate to contact me, I would love to hear from you!
      </p>
    </div>
  );
}

export default AboutMe;
