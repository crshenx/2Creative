import React from "react";
import MobileNav from "./MobileNav";

function NavBar() {
  const services = [
    "Bridal Concierge",
    "Event Planning",
    "Testimonials",
    "A Spontaneous Rythm",
    "Contact",
  ];
  const divider = "✧";

  function scrollToItem(e) {
    let item = e.target;
    console.log(item);
  }

  let navItems = services.map((service, i) => {
    if (i === services.length - 1) {
      return (
        <div className={`nav__item-parent`} key={i}>
          <div className={`nav__item`} onClick={scrollToItem}>
            {service}
          </div>
        </div>
      );
    }
    return (
      <div className={`nav__item-parent`} key={i}>
        <div className={`nav__item`} onClick={scrollToItem}>
          {service}
        </div>
        <div className={`nav__divider`}>{divider}</div>
      </div>
    );
  });

  let mobileNavItems = services.map((service, i) => {
    return (
      <div className={`nav__mobile-item`} key={i} onClick={scrollToItem}>
        {service}
      </div>
    );
  });

  return (
    <div style={{ position: "sticky", top: 0 }}>
      <div className="nav">{navItems}</div>
      <MobileNav mobileNavItems={mobileNavItems} />
    </div>
  );
}

export default NavBar;
