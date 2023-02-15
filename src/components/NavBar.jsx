import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { camelCase } from "lodash";
import MobileNav from "./MobileNav";
import "../css/NavBar.css";

const services = [
  "About Me",
  "Bridal Concierge",
  "Event Planning",
  "Testimonials",
  // "A Spontaneous Rhythm",
  "Contact",
];

const divider = "✧";

const NavBar = (props) => {
  function scrollToItem(e) {
    const node = e.target.dataset["node"] + "Ref";

    try {
      props[node].current.scrollIntoView();
    } catch (e) {
      console.error(e);
    }
  }

  let navItems = services.map((service, i) => {
    return (
      <div className={`nav__item-parent`} key={i}>
        <div
          className={`nav__item`}
          data-node={camelCase(service.split(" ")[0])}
          onClick={scrollToItem}
        >
          {service}
        </div>
        {i !== services.length - 1 && (
          // do not render star divider on last element
          <div className={`nav__divider`}>{divider}</div>
        )}
      </div>
    );
  });

  let mobileNavItems = services.map((service, i) => {
    return (
      <div
        className={`nav__mobile-item`}
        key={i}
        onClick={scrollToItem}
        data-node={camelCase(service.split(" ")[0])}
      >
        {service}
      </div>
    );
  });

  return (
    <div className="nav__class">
      <div className={`nav__wrapper ${props.className}-wrapper`}>
        <div className={`nav ${props.className}`}>{navItems}</div>
      </div>
      {/* <div className="nav__mobile-wrapper"> */}
      <MobileNav mobileNavItems={mobileNavItems} />
      {/* </div> */}
    </div>
  );
};

export default NavBar;
