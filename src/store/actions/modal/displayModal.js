export const setDisplayModal = (bool, component) => (dispatch) => {
  dispatch({
    type: "SET_DISPLAY_MODAL",
    payload: { bool, component },
  });
};
