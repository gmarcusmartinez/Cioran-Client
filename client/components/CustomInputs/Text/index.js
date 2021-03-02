import React from 'react';

const Text = ({ error, info, label, name, onChange, value, required }) => {
  const isRequired = required ? <span>*</span> : null;
  const small = info ? <div className='text-input__info'>{info}</div> : null;

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
      {small}
      {error && <div className='input-error'>{error.message}</div>}
    </div>
  );
};

export default Text;
