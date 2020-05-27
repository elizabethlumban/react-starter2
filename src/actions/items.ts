import { get } from "lib/fetch";

export const GET_ITEMS = "items/GET";

export const getItems = () => ({
  type: GET_ITEMS,
  payload: get("/api/item"),
});
