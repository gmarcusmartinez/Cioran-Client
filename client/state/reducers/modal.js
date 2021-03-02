import { TOGGLE_MODAL } from '../types';

const initialState = {
  displayModal: false,
  component: null,
  data: null,
};

export const modal = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return {
        displayModal: payload.displayModal,
        component: payload.component,
        data: payload.data,
      };
    default:
      return state;
  }
};
