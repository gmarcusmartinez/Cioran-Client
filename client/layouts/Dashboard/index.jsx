import React from 'react';
import { useRouter } from 'next/router';
import { Modal } from '../../components/Modal';
import { Navigation } from '../../components/Navigation';

const DashboardLayout = ({ currentUser, children }) => {
  const router = useRouter();
  const name = currentUser ? currentUser.name : '';

  // React.useEffect(() => {
  //   if (!currentUser) router.push('/');
  // }, []);

  return (
    <div className='dashboard-wrapper'>
      <div className='dashboard'>
        <Navigation name={name} />
        <div className='dashboard__content'>{children}</div>
        <Modal />
      </div>
    </div>
  );
};

export default DashboardLayout;
