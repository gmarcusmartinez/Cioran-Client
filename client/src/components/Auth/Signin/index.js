import { useState } from "react";
import Router from "next/router";
import AuthInput from "components/Auth/AuthInput";
import useRequest from "hooks/use-request";

const Signin = ({ setFormDisplay }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { doRequest, errors } = useRequest({
    url: "/api/auth/signin",
    method: "post",
    body: formData,
    onSuccess: () => Router.push("/dashboard/projects"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  };

  const setError = (field) =>
    errors ? errors.find((err) => err.field === field) : null;

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
