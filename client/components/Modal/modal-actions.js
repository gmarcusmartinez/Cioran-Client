import React from 'react';
import { AuthForm } from '../Forms/Auth';
import { CreateProjectForm } from '../Forms/CreateProject';
import { Signout } from '../Forms/Signout';

export const renderComponent = (component) => {
  switch (component) {
    case 'AUTH_FORM':
      return <AuthForm />;
    case 'CREATE_PROJECT':
      return <CreateProjectForm />;
    case 'SIGNOUT':
      return <Signout />;

    default:
      return null;
  }
};
