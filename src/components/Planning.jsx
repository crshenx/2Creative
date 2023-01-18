import React from "react";
import PlanningBanner from "../assets/PlanningBanner.jpg";
import "../css/Planning.css";

function Planning() {
  return (
    <div className="planning">
      <img src={PlanningBanner} className="planning-banner" />
      <div className="planning-title-container">
        <div className="planning-title-event">Event</div>
        <div className="planning-title-planning">Planning</div>
      </div>
      <div className="planning-content-container">
        <p>
          It would be my honor to collaborate with you to make your dream day a
          reality! I offer different levels and options of my planning guidance
          to allow you to choose what best fits your needs. Take a look at the
          brief descriptions below and choose what's right for you!{" "}
        </p>
      </div>
    </div>
  );
}

export default Planning;
