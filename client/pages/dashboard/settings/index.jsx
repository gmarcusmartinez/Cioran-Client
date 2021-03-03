import React from 'react';
import { useActions } from '../../../hooks/use-actions';
import { DashboardLayout } from '../../../layouts/Dashboard';

const Settings = () => {
  const { setTitle } = useActions();

  React.useEffect(() => {
    setTitle('Settings');
  });
  return <div className='settings'></div>;
};

Settings.Layout = DashboardLayout;

export default Settings;
