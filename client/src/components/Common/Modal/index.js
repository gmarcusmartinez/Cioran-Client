import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "store/actions/modal/toggleModal";
import { renderForm } from "./modal-actions";
import { renderModalCloseBtn } from "./modal-close-btn";

const Modal = ({ displayModal, toggleModal, component }) => {
  const className = `modal ${displayModal ? "open" : "closed"}`;

  return (
    <div className={className}>
      {renderModalCloseBtn(displayModal, toggleModal)}
      <div className="modal__body">{renderForm(component)}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  displayModal: state.modal.displayModal,
  component: state.modal.component,
});

export default connect(mapStateToProps, { toggleModal })(Modal);
