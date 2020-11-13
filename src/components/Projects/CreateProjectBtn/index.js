import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "store/actions/modal/toggleModal";

const CreateProjectBtn = ({ toggleModal }) => {
  const modalParams = {
    displayModal: true,
    component: "CREATE_PROJECT",
    data: null,
  };

  return (
    <div
      className="create-project-btn"
      onClick={() => toggleModal(modalParams)}
    >
      Create Project
      <span className="plus">+</span>
    </div>
  );
};

export default connect(null, { toggleModal })(CreateProjectBtn);
