import "./styles.scss";

const AuthInput = ({ placeholder, name, value, type, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type ? type : "text"}
      className="auth-input"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default AuthInput;
