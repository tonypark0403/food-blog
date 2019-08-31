import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middlewares: any[] = [thunk];
const browser: any = window as any;
const reduxDevtoolsExtension =
  browser.__REDUX_DEVTOOLS_EXTENSION__ &&
  browser.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    reduxDevtoolsExtension
  )
);
