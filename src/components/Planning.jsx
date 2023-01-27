import React, { useState } from "react";
import PlanningBanner from "../assets/PlanningBanner.jpg";
import "../css/Planning.css";

function Planning() {
  const [activeButton1, setActiveButton1] = useState(true);
  const [activeButton2, setActiveButton2] = useState(false);
  const [activeButton3, setActiveButton3] = useState(false);
  const [activeButton4, setActiveButton4] = useState(false);

  return (
    <div className="planning">
      <div className="planning-title-container">
        <div className="planning-title-event">event</div>
        <div className="planning-title-planning">planning</div>
      </div>
      <div className="planning_banner-container">
        <img src={PlanningBanner} className="planning-banner" />
      </div>
      <div className="planning-content-container">
        <div className="planning-button-container">
          <div
            className="btn welcome"
            onClick={() => {
              if (!activeButton1) setActiveButton1(true);
              setActiveButton2(false);
              setActiveButton3(false);
              setActiveButton4(false);
            }}
          >
            <span>Welcome</span>
          </div>

          <div
            className="btn a-la"
            onClick={() => {
              if (!activeButton2) setActiveButton2(true);
              setActiveButton1(false);
              setActiveButton3(false);
              setActiveButton4(false);
            }}
          >
            <span>A La Carte</span>
          </div>
          <div
            className="btn month-of"
            onClick={() => {
              if (!activeButton3) setActiveButton3(true);
              setActiveButton1(false);
              setActiveButton2(false);
              setActiveButton4(false);
            }}
          >
            <span>Month of</span>
          </div>
          <div
            className="btn full-service"
            onClick={() => {
              if (!activeButton4) setActiveButton4(true);
              setActiveButton1(false);
              setActiveButton2(false);
              setActiveButton3(false);
            }}
          >
            <span>Full Service</span>
          </div>
        </div>
        <div className="planning-content__text-container">
          <div className={activeButton1 ? "active" : "inactive"}>
            <div className="text-title planning-content__text-title-welcome">
              Welcome
            </div>
            It would be my honor to collaborate with you to make your dream day
            a reality! I offer different levels and options of my planning
            guidance to allow you to choose what best fits your needs. Take a
            look at the brief descriptions below and choose what's right for
            you!
          </div>
          <div className={activeButton2 ? "active" : "inactive"}>
            <div className="text-title planning-content__text-title-carte">
              A La Carte
            </div>
            A La Carte services allow you to pick and choose where you need
            bursts of assistance from a professional. Each service is priced
            individually.PERFECT for mini events as well!
          </div>
          <div className={activeButton3 ? "active" : "inactive"}>
            <div className="text-title planning-content__text-title-month">
              Month of
            </div>
            Month OF" Coordination is best for the couple who handled it all and
            now just wants to sit back and enjoy the ride. I run the show the
            final month before the event all the way through the end of the big
            day!{" "}
          </div>
          <div className={activeButton4 ? "active" : "inactive"}>
            <div className="text-title planning-content__text-title-service">
              Full Service
            </div>
            With full service planning, I will help you with everything from the
            wording on your invitations and full event design, to our final
            goodbye at the end of your best day ever!{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planning;
