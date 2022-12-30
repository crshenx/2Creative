import React, { useState } from "react";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const services = [
    "Bridal Concierge",
    "Event Planning",
    "A la Carte",
    "Testimonials",
    "A Spontaneous Rythm",
    "Contact",
  ];
  const divider = "✧";

  let navItems = services.map((service, i) => {
    if (i === services.length - 1) {
      return (
        <div className={`nav__item-parent-last`} key={i}>
          <div className={`nav__item-last`}>{service}</div>
        </div>
      );
    }
    return (
      <div className={`nav__item-parent`} key={i}>
        <div className={`nav__item`}>{service}</div>
        <div className={`nav__divider`}>{divider}</div>
      </div>
    );
  });

  let mobileNavItems = services.map((service, i) => {
    return (
      <div className={`nav__mobile-item`} key={i}>
        {service}
      </div>
    );
  });

  function openMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log(mobileMenuOpen);
  }

  return (
    <div>
      <div className="nav__mobile-expand-button" onClick={openMobileMenu}>
        ☰
      </div>
      <div className="nav">{navItems}</div>
      <div
        className={mobileMenuOpen ? "nav__mobile-open" : "nav__mobile-closed"}
      >
        {mobileNavItems}
      </div>
    </div>
  );
}

export default NavBar;
