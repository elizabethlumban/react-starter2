import { getItems, addItem, LOAD_ITEMS, ADD_ITEM } from "../items";
import * as fetch from "../../lib/fetch";

describe("getItems", () => {
    it("calls the GET API", () => {
        // Mutate the named export with a mock
        fetch.apiCall = jest.fn();

        // Call the API
        expect(getItems().type).toBe(LOAD_ITEMS);

        expect(fetch.apiCall).toBeCalledWith("/api/items");
    });
});

describe("addItem", () => {
    it("calls the POST API", () => {
        // Mutate the named export with a mock
        fetch.apiCall = jest.fn();

        // Call the API
        expect(addItem({ text: "TEST" }).type).toBe(ADD_ITEM);

        expect(fetch.apiCall).toBeCalledWith("/api/items", "POST", { text: "TEST" });
    });
});
