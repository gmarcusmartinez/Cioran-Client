import { TOGGLE_NAV } from '../types';

const initialState = {
  isOpen: true,
};

export const nav = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_NAV:
      return {
        isOpen: payload,
      };
    default:
      return state;
  }
};
