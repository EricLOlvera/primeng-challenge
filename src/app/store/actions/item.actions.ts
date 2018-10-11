import { Action } from '@ngrx/store';
import { Item } from '../models';

export enum ActionTypes {
    LOAD_REQUEST = '[Item] Get All',
    LOAD_SUCCESS = '[Item] Load Success',
    LOAD_FAILURE = '[Item] Get Failure',

    UPDATE_ONE = '[Item] Update One',
    ADD_ONE = '[Item] Add One'
}

export class AddOne implements Action {
    readonly type = ActionTypes.ADD_ONE;
}

export class UpdateOne implements Action {
    readonly type = ActionTypes.UPDATE_ONE;
    constructor(public payload: { item: Item }) {}
}

export class LoadRequest implements Action {
    readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailure implements Action {
    readonly type = ActionTypes.LOAD_FAILURE;
    constructor(public payload: { error: string }) {}
}

export class LoadSuccess implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;
    constructor(public payload: { items: Item[] }) {}
}


export type Actions = AddOne | UpdateOne | LoadRequest | LoadFailure | LoadSuccess;
