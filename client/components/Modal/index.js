import React from 'react';
import { useActions } from '../../hooks/use-actions';
import { renderComponent } from './modal-actions';
import { useSelector } from 'react-redux';

export const Modal = () => {
  const { displayModal, component } = useSelector((state) => state.modal);
  const className = `modal ${displayModal ? 'open' : 'closed'}`;
  const { toggleModal } = useActions();

  return (
    <div className={className}>
      <div className='modal__close-btn' onClick={() => toggleModal(false)}>
        <div className={`modal__bar ${displayModal ? 'cross' : ''}`}></div>
        <div className={`modal__bar ${displayModal ? 'cross' : ''}`}></div>
        <div className={`modal__bar ${displayModal ? 'cross' : ''}`}></div>
      </div>
      <div className='modal__body'>{renderComponent(component)}</div>
    </div>
  );
};
