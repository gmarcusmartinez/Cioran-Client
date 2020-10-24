import { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import "./styles.scss";

const AuthCard = () => {
  const [formDisplay, setFormDisplay] = useState("RENDER_SIGNIN");

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
