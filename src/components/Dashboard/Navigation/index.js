import "./styles.scss";
import { useState } from "react";
import Link from "next/link";

import { links } from "components/Dashboard/Links";
import MenuBars from "components/Dashboard/MenuBars";
import MobileNavigation from "components/Dashboard/MobileNavigation";

const Navigation = () => {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  return (
    <>
      <div className="navigation__header">
        <MenuBars
          displayMobileNav={displayMobileNav}
          setDisplayMobileNav={setDisplayMobileNav}
        />
        <div className="navigation__usr-img"></div>
        <div className="navigation__usr-name">Test User</div>
        {renderLinks()}
      </div>
      <MobileNavigation
        displayMobileNav={displayMobileNav}
        setDisplayMobileNav={setDisplayMobileNav}
      />
    </>
  );
};

export default Navigation;

const renderLinks = () => {
  const linkEls = links.map((l, i) => (
    <li key={i} className="navigation__link">
      <Link href={l.to}>
        <a>{l.text}</a>
      </Link>
    </li>
  ));
  return linkEls;
};
