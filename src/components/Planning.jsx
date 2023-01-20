import React from "react";
import PlanningBanner from "../assets/PlanningBanner.jpg";
import "../css/Planning.css";

function Planning() {
  function buttonClick(e) {
    console.log(e.target.className);
  }
  return (
    <div className="planning">
      <img src={PlanningBanner} className="planning-banner" />
      <div className="planning-title-container">
        <div className="planning-title-event">Event</div>
        <div className="planning-title-planning">Planning</div>
      </div>
      <div className="planning-content-container">
        <div className="planning-button-container">
          <div className="btn welcome" onClick={buttonClick}>
            <span>Welcome</span>
          </div>

          <div className="btn a-la" onClick={buttonClick}>
            <span>A La Carte</span>
          </div>
          <div className="btn month-of" onClick={buttonClick}>
            <span>Month of</span>
          </div>
          <div className="btn day-of" onClick={buttonClick}>
            <span>Full Service</span>
          </div>
        </div>
        <p className="planning__content-welcome">
          It would be my honor to collaborate with you to make your dream day a
          reality! I offer different levels and options of my planning guidance
          to allow you to choose what best fits your needs. Take a look at the
          brief descriptions below and choose what's right for you!{" "}
        </p>
        <p className="planning__content-carte">
          A La Carte services allow you to pick and choose where you need bursts
          of assistance from a professional. Each service is priced
          individually.PERFECT for mini events as well!
        </p>
        <p className="planning__content-month">
          Month OF" Coordination is best for the couple who handled it all and
          now just wants to sit back and enjoy the ride. I run the show the
          final month before the event all the way through the end of the big
          day!{" "}
        </p>
        <p className="planning__content-full-service">
          With full service planning, I will help you with everything from the
          wording on your invitations and full event design, to our final
          goodbye at the end of your best day ever!{" "}
        </p>
      </div>
    </div>
  );
}

export default Planning;
