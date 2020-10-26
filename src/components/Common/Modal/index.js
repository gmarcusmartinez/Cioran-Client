import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "store/actions/modal/toggleModal";
import "./styles.scss";

const Modal = ({ displayModal, toggleModal, children }) => {
  return (
    <div
      className={`modal ${displayModal ? "open" : "closed"}`}
      onClick={() => toggleModal(false)}
    >
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  displayModal: state.modal.displayModal,
});

export default connect(mapStateToProps, { toggleModal })(Modal);
