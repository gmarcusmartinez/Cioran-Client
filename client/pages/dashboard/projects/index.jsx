import React from 'react';
import { CreateProjectBtn } from './create-project-btn';
import { DashboardLayout } from '../../../layouts/Dashboard';

const ProjectConsole = () => {
  return (
    <div className='projects-console'>
      <div className='dashboard__content-header'>
        <h3>My Projects</h3>
        <div className='polygon-border' />
      </div>
      <CreateProjectBtn />
    </div>
  );
};

ProjectConsole.Layout = DashboardLayout;

export default ProjectConsole;
