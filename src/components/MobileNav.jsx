import React, { useState } from "react";
import "../css/NavBar.css";

function MobileNav({ mobileNavItems }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function openMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
    // console.log(mobileMenuOpen);
  }
  return (
    <div className="nav__mobile-container">
      <div className="nav__mobile-expand-button" onClick={openMobileMenu}>
        ☰
      </div>
      <div
        onClick={() => {
          setMobileMenuOpen(!mobileMenuOpen);
        }}
        className={mobileMenuOpen ? "nav__mobile-open" : "nav__mobile-closed"}
      >
        {mobileNavItems}
      </div>
    </div>
  );
}

export default MobileNav;
