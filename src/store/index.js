import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, compose, createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import history from "../history";
import rootReducer from "../reducers";

import initialState from "./initialState";

// Redux dev tools only in DEV mode ...
const devToolsExt = window.devToolsExtension;
const shouldAddDevTools = process.env.NODE_ENV === "development" && typeof devToolsExt === "function";
const devToolsEnhancers = shouldAddDevTools ? [devToolsExt()] : [];

// Create a history middleware
const middleware = [routerMiddleware(history), promiseMiddleware()];

// An "enhancer", which combines Redux middleware (if in DEV mode) and react router
const storeEnhancer = compose(
    applyMiddleware(...middleware),
    ...devToolsEnhancers
);

// Configure the store ...
const store = createStore(
    rootReducer,
    initialState,
    storeEnhancer
);

export default store;