import React from 'react';
import { Loader } from '../../Loader';

export const Signout = () => {
  return (
    <div className='signout__content'>
      <span>signing you out</span>
      <Loader />
    </div>
  );
};
