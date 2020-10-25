const initialState = {
  displayModal: false,
  component: "",
};

export const modal = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_DISPLAY_MODAL":
      return {
        displayModal: payload.bool,
        component: payload.component,
      };
    default:
      return state;
  }
};
