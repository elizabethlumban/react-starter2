import initialState from "store/initialState";
import { fulfilled, failed, pending } from "lib/promiseMiddlewareTypes";
import { GET_ITEMS } from "actions/items";

const submittingChanges = (state = initialState.submittingChanges, action: any) => {
  switch (action.type) {
    case pending(GET_ITEMS):
      return true;
    case failed(GET_ITEMS):
    case fulfilled(GET_ITEMS):
      return false;
  }
  return state;
};

export default submittingChanges;
