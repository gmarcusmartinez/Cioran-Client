import "./styles.scss";

const MenuBars = ({ displayMobileNav, setDisplayMobileNav }) => {
  return (
    <div
      className="menu-bars"
      onClick={() => setDisplayMobileNav(!displayMobileNav)}
    >
      <div className={`bar ${displayMobileNav ? "change" : ""}`}></div>
      <div className={`bar ${displayMobileNav ? "change" : ""}`}></div>
      <div className={`bar ${displayMobileNav ? "change" : ""}`}></div>
    </div>
  );
};

export default MenuBars;
