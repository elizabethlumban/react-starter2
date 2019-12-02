import { combineReducers } from "redux";
import loading from "./loading";
import submittingChanges from "./submittingChanges";
import items from "./items";

export default () =>
  combineReducers({
    submittingChanges,
    loading,
    items,
  });
