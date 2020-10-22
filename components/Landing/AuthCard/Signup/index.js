import { useState } from "react";
import AuthInput from "../AuthInput";
import "./styles.scss";

const defaultForm = { name: "", email: "", password: "" };

const Signup = ({ setFormDisplay }) => {
  const [formData, setFormData] = useState(defaultForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultForm);
  };

  const handleSetFormDisplay = () => setFormDisplay("RENDER_SIGNIN");

  const { name, email, password } = formData;

  return (
    <div className="auth-card">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-form__title">Create Your Account</h2>
        <AuthInput
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
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
        <button className="signup-form__btn btn-primary">Get Started!</button>
        <div className="set-form-display">
          Already have an account?
          <span onClick={handleSetFormDisplay}>Signin</span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
