import React, { useState } from "react";
import "./MobileNav.css";

function MobileNav({ mobileNavItems }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function openMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log(mobileMenuOpen);
  }
  return (
    <div>
      <div className="nav__mobile-expand-button" onClick={openMobileMenu}>
        ☰
      </div>
      <div
        className={mobileMenuOpen ? "nav__mobile-open" : "nav__mobile-closed"}
      >
        {mobileNavItems}
      </div>
    </div>
  );
}

export default MobileNav;
