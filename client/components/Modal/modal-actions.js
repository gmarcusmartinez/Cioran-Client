import React from 'react';
import { AuthForm } from '../Forms/Auth';
// import CreateProjectForm from "components/Forms/CreateProjectForm";

export const renderComponent = (component) => {
  switch (component) {
    case 'AUTH_FORM':
      return <AuthForm />;

    default:
      return null;
  }
};
