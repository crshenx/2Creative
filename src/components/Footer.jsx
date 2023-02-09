import React from "react";
import Logo from "../assets/Logo.jpg";
import "../css/Footer.css";
import NavBar from "./NavBar";

function Footer() {
  return (
    <div className="footer">
      <img className="logo" src={Logo} />
      <NavBar />
    </div>
  );
}

export default Footer;
