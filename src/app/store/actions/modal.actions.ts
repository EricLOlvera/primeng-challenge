import { Action } from '@ngrx/store';
import { Item } from '../models';

export enum ActionTypes {
    OPEN_WITH = '[Modal] Open With',
    CLOSE = '[Modal] Close',
    UPDATE_ITEM = '[Modal] Update Item',
    SET_DIRTY = '[Modal] Set Dirty'
}

export class OpenWith implements Action {
    readonly type = ActionTypes.OPEN_WITH;
    constructor(public payload: { item: Item }) {}
}

export class Close implements Action {
    readonly type = ActionTypes.CLOSE;
}

export class UpdateItem implements Action {
    readonly type = ActionTypes.UPDATE_ITEM;
    constructor(public payload: { item: Item }) {}
}

export class SetDirty implements Action {
    readonly type = ActionTypes.SET_DIRTY;
    constructor(public payload: { isDirty: boolean }) {}

}

export type Actions = OpenWith | Close | UpdateItem | SetDirty;
