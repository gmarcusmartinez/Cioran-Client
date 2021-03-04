import React from 'react';
import DashboardLayout from '../../../layouts/Dashboard';

const Settings = () => {
  return (
    <div className='settings'>
      <div className='dashboard__content-header'>
        <h3>Settings</h3>
        <div className='polygon-border' />
      </div>
    </div>
  );
};

Settings.Layout = DashboardLayout;

export default Settings;
