import Link from "next/link";
import { connect } from "react-redux";
import { toggleNav } from "store/actions/nav/toggleNav";
import { links } from "../Links";

const MobileNavigation = ({ isOpen, toggleNav }) => {
  return (
    <ul className={`mobile-navigation ${isOpen ? "open" : "closed"}`}>
      {renderLinks(isOpen, toggleNav)}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.nav.isOpen,
});

export default connect(mapStateToProps, { toggleNav })(MobileNavigation);

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
