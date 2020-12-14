import { TOGGLE_NAV } from "store/actions/types";

const initialState = {
  isOpen: false,
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
