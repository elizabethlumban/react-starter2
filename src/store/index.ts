import { applyMiddleware, compose, createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import createRootReducer from "../reducers";
import initialState from "./initialState";

// Redux dev tools only in DEV mode ...
const devToolsExt = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
const shouldAddDevTools =
  process.env.NODE_ENV === "development" && typeof devToolsExt === "function";
const devToolsEnhancers = shouldAddDevTools ? [devToolsExt()] : [];

// Create a promise middleware
const middleware = [promiseMiddleware];

// An "enhancer", which combines Redux middleware (if in DEV mode) and react router
const storeEnhancer = compose(
  applyMiddleware(...middleware),
  ...devToolsEnhancers
);

// Configure the store ...
const store = createStore(
  createRootReducer(),
  initialState as any,
  storeEnhancer
);

export default store;
