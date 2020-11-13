import { TOGGLE_MODAL } from "../types";

export const toggleModal = ({ displayModal, component, data }) => (
  dispatch
) => {
  dispatch({
    type: TOGGLE_MODAL,
    payload: { displayModal, component, data },
  });
};
