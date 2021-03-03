import { combineReducers } from 'redux';
import { dashboard } from './dashboard';
import { nav } from './nav';
import { modal } from './modal';

export const rootReducer = combineReducers({
  dashboard,
  modal,
  nav,
});
