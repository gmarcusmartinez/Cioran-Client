import { useState } from "react";
import "./styles.scss";
import MobileNavigation from "../MobileNavigation";

const Navigation = () => {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  return (
    <>
      <div className="navigation__header">
        <div
          className="menu-bars"
          onClick={() => setDisplayMobileNav(!displayMobileNav)}
        >
          <div className={`bar ${displayMobileNav ? "change" : ""}`}></div>
          <div className={`bar ${displayMobileNav ? "change" : ""}`}></div>
          <div className={`bar ${displayMobileNav ? "change" : ""}`}></div>
        </div>
      </div>
      <MobileNavigation
        displayMobileNav={displayMobileNav}
        setDisplayMobileNav={setDisplayMobileNav}
      />
    </>
  );
};

export default Navigation;
