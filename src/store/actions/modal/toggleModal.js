import { TOGGLE_MODAL } from "../types";

export const toggleModal = (bool) => (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL,
    payload: bool,
  });
};
