import { useState } from 'react';
import { Signin } from './Signin';
import { Signup } from './Signup';

export const AuthForm = () => {
  const [formDisplay, setFormDisplay] = useState('RENDER_SIGNUP');

  const renderContent = () => {
    switch (formDisplay) {
      case 'RENDER_SIGNIN':
        return <Signin setFormDisplay={setFormDisplay} />;
      case 'RENDER_SIGNUP':
        return <Signup setFormDisplay={setFormDisplay} />;
    }
  };
  return <>{renderContent()}</>;
};
