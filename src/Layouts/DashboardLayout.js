import Navigation from "components/Dashboard/Navigation";
import React from "react";
import "./styles.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard">
        <Navigation />
        <div className="dashboard__content">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
