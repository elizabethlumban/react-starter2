import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import items from "./items";

export default combineReducers({
    items,
    routing: routerReducer,
    form: formReducer,
});
