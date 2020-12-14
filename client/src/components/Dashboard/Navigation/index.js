import Link from "components/Common/Link/";
import { links } from "components/Dashboard/Links";
import MenuBars from "components/Dashboard/MenuBars";
import MobileNavigation from "components/Dashboard/MobileNavigation";

const Navigation = () => {
  return (
    <>
      <div className="navigation__header">
        <MenuBars />
        <div className="navigation__usr-img"></div>
        <div className="navigation__usr-name">Test User</div>
        {renderLinks()}
      </div>
      <MobileNavigation />
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
