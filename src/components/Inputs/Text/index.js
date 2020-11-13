import React from "react";

const Text = ({ error, info, label, name, onChange, value, required }) => {
  let isRequired = null;
  if (required) isRequired = <span className="text-input__required">*</span>;

  let inputInfo = null;
  if (info) inputInfo = <div className="text-input__info">{info}</div>;

  return (
    <div className="text-input">
      <label>
        {label}
        {isRequired}
      </label>
      <input type="text" name={name} value={value} onChange={onChange} />
      {inputInfo}
      {error && <div className="input-error">{error.message}</div>}
    </div>
  );
};

export default Text;
