import { apiCall } from '../lib/fetch';

export const LOAD_ITEMS = 'items/LOAD_ITEMS';
export const ADD_ITEM = 'items/ADD_ITEM';

export const getItems = () => {
    return {
        type: LOAD_ITEMS,
        payload: apiCall('/api/items')
    };
};

export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: apiCall('/api/items', 'POST', item)
    };
};
