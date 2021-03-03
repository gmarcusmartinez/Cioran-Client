import React from 'react';
import { useActions } from '../../../hooks/use-actions';
import { DashboardLayout } from '../../../layouts/Dashboard';

const Inbox = () => {
  const { setTitle } = useActions();

  React.useEffect(() => {
    setTitle('Inbox');
  });
  return <div className='inbox'></div>;
};

Inbox.Layout = DashboardLayout;

export default Inbox;
