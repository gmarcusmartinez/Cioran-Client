import { TOGGLE_NAV } from "store/actions/types";

export const toggleNav = (bool) => (dispatch) => {
  dispatch({
    type: TOGGLE_NAV,
    payload: bool,
  });
};
