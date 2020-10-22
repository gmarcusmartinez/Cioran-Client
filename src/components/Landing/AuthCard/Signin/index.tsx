import React, { useState } from "react";
import AuthInput from "../AuthInput";

interface IProps {
  setFormDisplay: Function;
}

const Signin: React.FC<IProps> = ({ setFormDisplay }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ email: "", password: "" });
  };

  const handleSetFormDisplay = () => setFormDisplay("RENDER_SIGNUP");

  const { email, password } = formData;
  return (
    <div className="auth-card">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2 className="signin-form__title">Signin To Your Account</h2>
        <AuthInput
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <AuthInput
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button className="signin-form__btn btn-primary">Signin</button>
        <div className="set-form-display">
          Dont have an account?
          <span onClick={handleSetFormDisplay}>Signup</span>
        </div>
      </form>
    </div>
  );
};

export default Signin;
