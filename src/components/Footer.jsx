import React, { forwardRef, useRef, useImperativeHandle } from "react";
import Logo from "../assets/Logo.jpg";
import "../css/Footer.css";
// import Socials from "./Socials";

const contactInfo = [
  `Alisha Hendricks`,
  `(818) 941-7802`,
  `alishalynnhendricks@gmail.com`,
  `@plus2creative <--instagram maybe move`,
];

const Footer = forwardRef((props, ref) => {
  const { toTop } = props;
  const contactRef = useRef(null);
  // const scrollTopRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      scrollIntoView: () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      },
    }),
    []
  );

  const contactList = contactInfo.map((info, i) => {
    return (
      <div
        key={i}
        className={`footer__info-${info.split(" ")[0].toLowerCase()}`}
      >
        {info}
      </div>
    );
  });

  return (
    <div ref={contactRef}>
      <img className="footer__logo" src={Logo} onClick={toTop} />
      <div className="footer__title">By Alisha Hendricks</div>
      <div className="footer">
        {/* <img className="logo" src={Logo} /> */}
        <div>
          <div className="footer__info">{contactList}</div>
          {/* <Socials /> */}
        </div>
      </div>
    </div>
  );
});

export default Footer;
