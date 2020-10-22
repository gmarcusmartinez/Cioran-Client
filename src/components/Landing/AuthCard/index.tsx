import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";

const AuthCard = () => {
  const [formDisplay, setFormDisplay] = React.useState("RENDER_SIGNIN");

  const renderContent = () => {
    switch (formDisplay) {
      case "RENDER_SIGNIN":
        return <Signin setFormDisplay={setFormDisplay} />;
      case "RENDER_SIGNUP":
        return <Signup setFormDisplay={setFormDisplay} />;
    }
  };
  return <>{renderContent()}</>;
};

export default AuthCard;
