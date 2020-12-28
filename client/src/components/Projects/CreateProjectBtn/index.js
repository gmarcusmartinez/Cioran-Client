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
      <span className="create-project-btn__text">Create Project</span>
    </div>
  );
};

export default connect(null, { toggleModal })(CreateProjectBtn);
