import { combineReducers } from 'redux';
import { nav } from './nav';
import { modal } from './modal';

export const rootReducer = combineReducers({
  modal,
  nav,
});
