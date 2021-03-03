import React from 'react';
import { DashboardLayout } from '../../../layouts/Dashboard';

const Inbox = () => {
  return (
    <div className='inbox'>
      <div className='dashboard__content-header'>
        <h3>Inbox</h3>
        <div className='polygon-border' />
      </div>
    </div>
  );
};

Inbox.Layout = DashboardLayout;

export default Inbox;
