import { Actions, ActionTypes } from '../actions/item.actions';
import { Item } from '../models';

export type Action = Actions;

// Default app state
export const initialState: Item[] = [];

export function itemReducer(state: Item[] = initialState, action: Action ): Item[] {
    switch (action.type) {
        case ActionTypes.ADD_ONE:
            const newItem: Item = {
                id: (state[state.length - 1].id + 1),
                active: false,
                after_call_work: false,
                restrict_call_history: false,
                role: 'MD',
                code: '168806515-X',
                description: 'This is a new Dummy row',
                last_modified_by: 'You',
                last_modified_date: new Date()
            };
            return [newItem, ...state];
        case ActionTypes.UPDATE_ONE:
            return state.map(item => item.id === action.payload.item.id ? {...item, ...action.payload.item} : item );
        case ActionTypes.LOAD_REQUEST:
            return state;
        case ActionTypes.LOAD_SUCCESS:
            return action.payload.items;

        default:
            return state;
    }
}
