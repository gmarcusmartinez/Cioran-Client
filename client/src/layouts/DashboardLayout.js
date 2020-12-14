import React from "react";
import Modal from "components/Common/Modal";
import Navigation from "components/Dashboard/Navigation";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard">
        <Navigation />
        <div className="dashboard__content">{children}</div>
        <Modal />
      </div>
    </div>
  );
};

export default DashboardLayout;
