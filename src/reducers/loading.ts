import { fulfilled, failed, pending } from "lib/promiseMiddlewareTypes";
import initialState from "store/initialState";
import { GET_ITEMS } from "actions/items";

const loading = (state = initialState.loading, action: any) => {
  switch (action.type) {
    case pending(GET_ITEMS):
      return true;
    case fulfilled(GET_ITEMS):
    case failed(GET_ITEMS):
      return false;
    default:
      return state;
  }
};

export default loading;
