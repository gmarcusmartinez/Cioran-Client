import { connect } from "react-redux";
import { toggleNav } from "store/actions/nav/toggleNav";

const MenuBars = ({ isOpen, toggleNav }) => {
  return (
    <div className="menu-bars" onClick={() => toggleNav(!isOpen)}>
      <div className={`bar ${isOpen ? "change" : ""}`}></div>
      <div className={`bar ${isOpen ? "change" : ""}`}></div>
      <div className={`bar ${isOpen ? "change" : ""}`}></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.nav.isOpen,
});

export default connect(mapStateToProps, { toggleNav })(MenuBars);
