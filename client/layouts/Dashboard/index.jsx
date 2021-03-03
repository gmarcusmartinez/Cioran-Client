import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../components/Modal';
import { Navigation } from '../../components/Navigation';

export const DashboardLayout = ({ children }) => {
  return (
    <div className='dashboard-wrapper'>
      <div className='dashboard'>
        <Navigation />
        <div className='dashboard__content'>{children}</div>
        <Modal />
      </div>
    </div>
  );
};
