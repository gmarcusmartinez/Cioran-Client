import AuthCard from "components/Landing/AuthCard";
import React from "react";

const Landing = () => {
  return (
    <div className="landing-screen">
      <div className="hero">
        <div className="hero__header"></div>
        <div className="hero__display">
          <div className="hero__logo">Cioran</div>
          <p className="hero__slogan">
            Plan, track, and manage your agile and software development projects
            in Cioran. Customize your workflow, collaborate, and release great
            software.
          </p>
        </div>
        <div className="hero__auth">
          <AuthCard />
        </div>
      </div>
    </div>
  );
};

export default Landing;
