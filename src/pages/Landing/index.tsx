import AuthCard from "components/Landing/AuthCard";
import React from "react";

const headerText = "Cioran";
const slogan =
  "Plan, track, and manage your agile and software development projects in Cioran. Customize your workflow, collaborate, and release greatsoftware.";

const Landing = () => {
  return (
    <div className="landing-screen">
      <div className="hero">
        <div className="hero__header">
          <h1 className="header-logo">{headerText}</h1>
          <h1 className="header-slogan">{slogan}</h1>
        </div>
        <div className="hero__display">
          <div className="hero__logo">{headerText}</div>
          <p className="hero__slogan">{slogan}</p>
        </div>
        <div className="hero__auth">
          <AuthCard />
        </div>
      </div>
    </div>
  );
};

export default Landing;
