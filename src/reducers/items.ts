import { fulfilled, failed, pending } from "lib/promiseMiddlewareTypes";
import initialState from "store/initialState";
import { GET_ITEMS } from "actions/items";

const items = (state = initialState.items, action: any) => {
  switch (action.type) {
    case failed(GET_ITEMS):
    case pending(GET_ITEMS):
      return [];
    case fulfilled(GET_ITEMS):
      return action.payload;
    default:
      return state;
  }
};

export default items;
