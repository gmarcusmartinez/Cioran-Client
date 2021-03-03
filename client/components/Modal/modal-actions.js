import React from 'react';
import { AuthForm } from '../Forms/Auth';
import { CreateProjectForm } from '../Forms/CreateProject';

export const renderComponent = (component) => {
  switch (component) {
    case 'AUTH_FORM':
      return <AuthForm />;
    case 'CREATE_PROJECT':
      return <CreateProjectForm />;

    default:
      return null;
  }
};
