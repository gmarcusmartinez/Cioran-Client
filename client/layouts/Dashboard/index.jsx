import React from 'react';
import { Modal } from '../../components/Modal';
import { Navigation } from '../../components/Navigation';
const DashboardLayout = () => {
  return (
    <div className='dashboard-wrapper'>
      <div className='dashboard'>
        <Navigation />
        <div></div>
        <Modal />
      </div>
    </div>
  );
};

export default DashboardLayout;
