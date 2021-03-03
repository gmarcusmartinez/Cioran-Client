import React from 'react';
import { useActions } from '../../../hooks/use-actions';
import { DashboardLayout } from '../../../layouts/Dashboard';

const MyQueue = () => {
  return (
    <div className='my-queue'>
      <div className='dashboard__content-header'>
        <h3>My Queue</h3>
        <div className='polygon-border' />
      </div>
    </div>
  );
};

MyQueue.Layout = DashboardLayout;

export default MyQueue;
