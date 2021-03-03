import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../components/Modal';
import { Navigation } from '../../components/Navigation';

export const DashboardLayout = ({ children }) => {
  const { title } = useSelector((state) => state.dashboard);

  return (
    <div className='dashboard-wrapper'>
      <div className='dashboard'>
        <Navigation />
        <div className='dashboard__content'>
          <div className='dashboard__content-header'>
            <h3>{title}</h3>
            <div className='polygon-border' />
          </div>
          {children}
        </div>
        <Modal />
      </div>
    </div>
  );
};
