import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

import thunkMiddleware from "redux-thunk";
import { rootReducer } from "store/reducers";

const makeStore = (context) =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

export const wrapper = createWrapper(makeStore);
