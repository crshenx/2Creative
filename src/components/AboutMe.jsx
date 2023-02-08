import React from "react";
import "../css/AboutMe.css";
import AboutMePic from "../assets/AboutMePortrait.jpg";
import AboutMeTitle from "../assets/AboutMeTitle.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__title-container">
        {/* <img src={AboutMeTitle} className="about-me__title" /> */}
        <div className="about-me__title-text">
          {`There is nothing that fills me\n with more joy than helping \ncreate a joyous moment, \nexperience or memory for someone. \nI adore a good story!`}
        </div>
      </div>
      <div className="about-me__pic-and-text-container">
        <div className="about-me__pic-container">
          <img src={AboutMePic} className="about-me__pic" />
        </div>
        <div className="about-me__background">
          <div className="about-me__hey-container">
            <div className="about-me__hey">hey</div>
            <div className="about-me__there">there</div>
          </div>
          <div className="about-me_text-container">
            <p className="about-me__text-p1">
              My name is Alisha and I love, love. I love people in love. It is
              actually that simple. It is also where my agenda starts and ends.
              There is nothing that fills me with more joy than helping create a
              joyous moment, experience, or memory for someone. I adore a good
              story!
            </p>
            <p className="about-me__text-p2">
              So I am incredibly blessed to have the opportunity to be a part of
              my couples' love stories during one of their most special
              chapters. It is actually unreal! As your Wedding/Event Planner or
              day of Bridal Concierge, my hope is that we come out of our
              experience together as new friends! I aim to work subtly and
              intimately behind the scenes to tell your story.
            </p>
            <p className="about-me__text-p3">
              To me, a wonderful event should showcase your story with those
              grand moments you always dreamed of, along with the more quiet and
              intimate pieces of your day. I want to assist you in arriving at
              your big day, whatever it is, as your true self! I am fully here
              for you.
            </p>
            <p className="about-me__text-p4">
              Please don’t hesitate to contact me, I would love to hear from
              you!
            </p>
          </div>
          <div className="about-xoxo-container">
            <div className="about-xoxo">xoxo</div>
            <div className="about-xo-alisha">alisha</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
