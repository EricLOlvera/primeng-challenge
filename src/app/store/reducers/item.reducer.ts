import { Actions, ActionTypes } from '../actions/item.actions';
import { Item } from '../models';

export type Action = Actions;

// Default app state
export const initialState: Item[] = [];

export function itemReducer(state: Item[] = initialState, action: Action ): Item[] {
    switch (action.type) {
        case ActionTypes.ADD_ONE:
            return [...state, action.payload.item];
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
