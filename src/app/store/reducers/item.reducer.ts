import { Actions, ActionTypes } from '../actions/item.actions';
import { Item } from '../models';

export interface State {
    itemlist: Item[];
}

export type Action = Actions;

// Default app state
export const initialState: State = {
    itemlist: []
};

export function itemReducer(state: State = initialState, action: Action ): State {
    console.log(action.type, state);

    switch (action.type) {
        case ActionTypes.ADD_ONE:
            return {...state, itemlist: [...state.itemlist, action.payload.item] };
        case ActionTypes.UPDATE_ONE:
            return {...state, itemlist: state.itemlist.reduce((acc, cur) => {
                return acc = cur.code === action.payload.code ? [...acc, action.payload.item] : [...acc, cur];
            }, []) };
        case ActionTypes.LOAD_REQUEST:
            return state;
        case ActionTypes.LOAD_SUCCESS:
            return { itemlist: action.payload.items };

        default:
            return state;
    }
}
