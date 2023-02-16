import React from "react";
import "../css/Header.css";
import NavBar from "./NavBar";
import logo from "../assets/Logo.jpg";
import flowers from "../assets/backgroundflowersResize.jpg";
import settingTable from "../assets/PlanningBannerMirroredResized.jpg";
import sunset from "../assets/SunsetWideScreenResize.jpg";

function Header({
  aboutRef,
  navbarRef,
  bridalRef,
  eventRef,
  testimonialsRef,

  contactRef,
}) {
  return (
    <div className="header__wrapper">
      <div className="header__title">
        <img src={logo} className="header__title-logo" />
      </div>
      <NavBar
        navbarRef={navbarRef}
        aboutRef={aboutRef}
        bridalRef={bridalRef}
        eventRef={eventRef}
        testimonialsRef={testimonialsRef}
        contactRef={contactRef}
        className={"header"}
      />
      {/* <div className="home__banner"></div> */}
      <div style={{ position: "relative" }}>
        <div className="header__banner-wrapper">
          {/* <img className="banner" src={banner} alt="" /> */}
          <img src={sunset} className={"header__sunset"} />
          <img src={flowers} className={"header__flowers"} />
          <img src={settingTable} className={"header__setting"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
