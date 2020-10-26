import { links } from "../Links";
import Link from "next/link";
import "./styles.scss";

const MobileNavigation = ({ displayMobileNav, setDisplayMobileNav }) => {
  return (
    <ul className={`mobile-navigation ${displayMobileNav ? "open" : "closed"}`}>
      {renderLinks(displayMobileNav, setDisplayMobileNav)}
    </ul>
  );
};

export default MobileNavigation;

const renderLinks = (bool, cb) => {
  const className = "mobile-navigation__link";
  const direction = bool ? "slide-in" : "slide-out";
  const linkEls = links.map((l, i) => (
    <li
      key={i}
      className={`${className} ${direction}-${i}`}
      onClick={() => cb(false)}
    >
      <Link href={l.to}>
        <a>{l.text}</a>
      </Link>
    </li>
  ));
  return linkEls;
};
