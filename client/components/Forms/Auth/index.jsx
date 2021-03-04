import { useState } from 'react';
import { Signin } from './signin';
import { Signup } from './signup';

export const AuthForm = () => {
  const [formDisplay, setFormDisplay] = useState('RENDER_SIGNUP');

  const handleClick = () => {
    formDisplay === 'RENDER_SIGNUP'
      ? setFormDisplay('RENDER_SIGNIN')
      : setFormDisplay('RENDER_SIGNUP');
  };
  const renderContent = () => {
    switch (formDisplay) {
      case 'RENDER_SIGNIN':
        return <Signin />;
      case 'RENDER_SIGNUP':
        return <Signup />;
    }
  };
  const title = formDisplay === 'RENDER_SIGNUP' ? 'Already' : 'Dont';
  const btn = formDisplay === 'RENDER_SIGNUP' ? 'Signin' : 'Signup';

  return (
    <div className='auth-form'>
      {renderContent()}
      <div className='set-form-display'>
        <span>{title} have an account? </span>
        <span onClick={handleClick}>{btn}</span>
      </div>
    </div>
  );
};
