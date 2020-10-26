import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import { rootReducer } from "store/reducers";
import { rootSaga } from "store/sagas";

const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [thunk, sagaMiddleware];

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore);
