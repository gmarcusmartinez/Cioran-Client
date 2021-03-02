import React from 'react';

const Text = ({ error, info, label, name, onChange, value, required }) => {
  const isRequired = required ? <span>*</span> : null;

  let inputInfo = null;
  if (info) inputInfo = <div className='text-input__info'>{info}</div>;

  return (
    <div className='text-input'>
      <label>
        {label}
        {isRequired}
      </label>
      <input
        spellCheck={false}
        type='text'
        name={name}
        value={value}
        onChange={onChange}
      />
      {inputInfo}
      {error && <div className='input-error'>{error.message}</div>}
    </div>
  );
};

export default Text;
