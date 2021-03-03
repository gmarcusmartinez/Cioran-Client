import React from 'react';
import { useActions } from '../../../hooks/use-actions';
import { DashboardLayout } from '../../../layouts/Dashboard';

const MyQueue = () => {
  const { setTitle } = useActions();

  React.useEffect(() => {
    setTitle('My Queue');
  });
  return <div className='my-queue'></div>;
};

MyQueue.Layout = DashboardLayout;

export default MyQueue;
