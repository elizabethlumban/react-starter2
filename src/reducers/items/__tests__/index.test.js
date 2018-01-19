import { ADD_ITEM } from '../../../actions/items';
import { failed, fulfilled } from '../../../lib/promiseMiddlewareTypes';
import itemsReducer from '..';

describe('Add Item event', () => {
    it('Adds a new item on success', () => {
        const action = {
            type: fulfilled(ADD_ITEM),
            payload: { id: '2', text: 'B' }
        };
        const state = [{ id: '1', text: 'A' }];
        expect(itemsReducer(state, action)).toEqual([
            { id: '1', text: 'A' },
            { id: '2', text: 'B' }
        ]);
    });

    it('does nothing on pending', () => {
        const action = {
            type: failed(ADD_ITEM),
            payload: { id: '2', text: 'B' }
        };
        const state = [{ id: '1', text: 'A' }];
        expect(itemsReducer(state, action)).toEqual([{ id: '1', text: 'A' }]);
    });
});
