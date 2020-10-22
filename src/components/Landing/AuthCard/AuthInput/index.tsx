import React, { ChangeEvent } from "react";

interface IProps {
  placeholder: string;
  value: string;
  name: string;
  type?: string;
  info?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const AuthInput: React.FC<IProps> = ({
  placeholder,
  name,
  value,
  type,
  onChange,
}) => {
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
