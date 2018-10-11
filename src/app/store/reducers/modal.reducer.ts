import { Actions, ActionTypes } from '../actions/modal.actions';
import { ModalState } from '../models';

export type Action = Actions;

// Default app state
export const initialState: ModalState = {
    visible: false,
    isDirty: false,
    content: {
        id: 0,
        description: '',
        code: '',
        role: null,
        active: false,
        last_modified_by: '',
        last_modified_date: new Date(),
        after_call_work: false,
        restrict_call_history: false
    }
};

export function modalReducer(state: ModalState = initialState, action: Action ): ModalState {
    console.log(state);
    switch (action.type) {
        case ActionTypes.OPEN_WITH:
            return {...state, visible: true, content: action.payload.item };
        case ActionTypes.CLOSE:
            return {...state, visible: false};
        case ActionTypes.UPDATE_ITEM:
            return {...state, content: action.payload.item};
        case ActionTypes.SET_DIRTY:
            return {...state, isDirty: action.payload.isDirty};
        default:
            return state;
    }
}
