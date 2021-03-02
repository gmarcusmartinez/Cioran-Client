const AuthInput = (props) => {
  const { placeholder, name, value, type, onChange, error } = props;
  return (
    <>
      <input
        placeholder={placeholder}
        type={type ? type : 'text'}
        className='auth-input'
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className='input-error'>{error.message}</div>}
    </>
  );
};

export default AuthInput;
