import React from 'react';
import { CreateProjectBtn } from './create-project-btn';
import { useActions } from '../../../hooks/use-actions';
import { DashboardLayout } from '../../../layouts/Dashboard';

const ProjectConsole = () => {
  const { setTitle } = useActions();

  React.useEffect(() => {
    setTitle('My Projects');
  });
  return (
    <div className='projects-console'>
      <CreateProjectBtn />
    </div>
  );
};

ProjectConsole.Layout = DashboardLayout;

export default ProjectConsole;
