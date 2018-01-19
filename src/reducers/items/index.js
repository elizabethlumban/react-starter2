import * as _ from 'lodash';
import { ADD_ITEM, LOAD_ITEMS } from '../../actions/items';
import { failed, fulfilled, pending } from '../../lib/promiseMiddlewareTypes';

const itemsReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case fulfilled(ADD_ITEM):
            return [...state, payload];
        case fulfilled(LOAD_ITEMS):
            return payload;
        case pending(ADD_ITEM):
        case pending(LOAD_ITEMS):
            // Change state to indicate loading ...
            console.log('loading ....');
            return state;
        case failed(ADD_ITEM):
        case failed(LOAD_ITEMS):
            // TODO Handle failure
            console.log('API call failed ....');
            return state;
        default:
            return state;
    }
};

export default itemsReducer;
