import React from 'react';
import Router from 'next/router';
import useRequest from '../../../hooks/use-request';
import { useActions } from '../../../hooks/use-actions';
import DashboardLayout from '../../../layouts/Dashboard';

const Signout = () => {
  const { toggleModal } = useActions();

  const { doRequest, errors } = useRequest({
    url: '/api/auth/signout',
    method: 'post',
    body: {},
    onSuccess: () => {
      Router.push('/');
      toggleModal(false, '');
    },
  });

  React.useEffect(() => {
    toggleModal(true, 'SIGNOUT');
    setTimeout(() => {
      doRequest();
    }, 500);
  }, []);

  return <div className='signout'></div>;
};

Signout.Layout = DashboardLayout;

export default Signout;
