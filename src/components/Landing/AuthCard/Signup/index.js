import { useState } from "react";
import Router from "next/router";
import AuthInput from "components/Landing/AuthCard/AuthInput";
import "./styles.scss";
import useRequest from "hooks/use-request";

const defaultForm = { name: "", email: "", password: "" };

const Signup = ({ setFormDisplay }) => {
  const [formData, setFormData] = useState(defaultForm);

  const { doRequest, errors } = useRequest({
    url: "/api/auth/signup",
    method: "post",
    body: formData,
    onSuccess: () => Router.push("/dashboard/projects"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  };
  const setError = (field) => {
    let inputError;
    if (errors) inputError = errors.find((err) => err.field === field);
    return inputError ? inputError : "";
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
          error={setError("name")}
        />
        <AuthInput
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          error={setError("email")}
        />
        <AuthInput
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          error={setError("password")}
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
