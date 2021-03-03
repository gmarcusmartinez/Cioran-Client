import React from 'react';
import { useActions } from '../../../hooks/use-actions';

export const CreateProjectBtn = () => {
  const { toggleModal } = useActions();
  const handleClick = () => toggleModal(true, 'CREATE_PROJECT');

  return (
    <div className='create-project-btn' onClick={handleClick}>
      <span>Create</span>
      <span>Project</span>
    </div>
  );
};
