import { useState } from "react";
import { links } from "../Links";
import "./styles.scss";
import MobileNavigation from "../MobileNavigation";

const Navigation = () => {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  return (
    <div className="navigation">
      <div className="navigation__header">
        <div
          className="menu-bars"
          onClick={() => setDisplayMobileNav(!displayMobileNav)}
        >
          <div className={`bar ${displayMobileNav ? "change" : ""}`}></div>
          <div className={`bar ${displayMobileNav ? "change" : ""}`}></div>
          <div className={`bar ${displayMobileNav ? "change" : ""}`}></div>
        </div>
        <div className="navigation__usr-img"></div>
        <div className="navigation__usr-name">Test User</div>
        {renderLinks()}
      </div>
      <MobileNavigation
        displayMobileNav={displayMobileNav}
        setDisplayMobileNav={setDisplayMobileNav}
      />
    </div>
  );
};

export default Navigation;

const renderLinks = () => {
  const linkEls = links.map((l, i) => (
    <li key={i} className="navigation__link">
      <a to={l.to}>{l.text}</a>
    </li>
  ));
  return linkEls;
};
