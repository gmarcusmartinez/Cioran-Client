import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "store/actions/modal/toggleModal";

const CreateProjectBtn = ({ toggleModal }) => {
  return (
    <div className="create-project-btn" onClick={() => toggleModal(true)}>
      Create Project
      <span className="plus">+</span>
    </div>
  );
};

export default connect(null, { toggleModal })(CreateProjectBtn);
