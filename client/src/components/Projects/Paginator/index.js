import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "store/actions/modal/toggleModal";

const ProjectsPaginator = ({ toggleModal }) => {
  const className = "project-paginator";

  const modalParams = {
    displayModal: true,
    component: "CREATE_PROJECT",
    data: null,
  };
  return (
    <div className={className}>
      <div className={`${className}__prev`}>
        <span>&#8249;</span>
      </div>
      <div
        className={`${className}__add`}
        onClick={() => toggleModal(modalParams)}
      >
        <span>&#43;</span>
      </div>
      <div className={`${className}__next`}>
        <span>&#8250;</span>
      </div>
    </div>
  );
};

export default connect(null, { toggleModal })(ProjectsPaginator);
