import { SET_TITLE } from '../../types';

export const setTitle = (payload) => (dispatch) =>
  dispatch({ type: SET_TITLE, payload });
