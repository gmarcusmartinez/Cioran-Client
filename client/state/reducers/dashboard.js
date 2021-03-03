import { SET_TITLE } from '../types';

const initialState = {
  title: '',
};

export const dashboard = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TITLE:
      return { title: payload };
    default:
      return state;
  }
};
