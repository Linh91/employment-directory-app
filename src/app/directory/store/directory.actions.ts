import { Directory } from './../directory.model';
import { Action } from '@ngrx/store';

export const ADD_DIRECTORY = 'ADD_DIRECTORY';
export const UPDATE_DIRECTORY = 'UPDATE_DIRECTORY';
export const DELETE_DIRECTORY = 'DELETE_DIRECTORY';
export const STORE_DIRECTORY = 'STORE_DIRECTORY';
export const FETCH_DIRECTORY = 'FETCH_DIRECTORY';

export class AddDirectory implements Action {
    readonly type = ADD_DIRECTORY;

     constructor(public payload: Directory) {}
}

export class UpdateDirectory implements Action {
    readonly type = UPDATE_DIRECTORY;

     constructor(public payload: {index: number, updateDirectory: Directory}) {}
}
export class DeleteDirectory implements Action {
    readonly type = DELETE_DIRECTORY;

     constructor(public payload: number) {}
}
export class StoreDirectory implements Action {
    readonly type = STORE_DIRECTORY;

     constructor(public payload: number) {}
}
export class FetchDirectory implements Action {
    readonly type = FETCH_DIRECTORY;

     constructor(public payload: number) {}
}

export type DirectoryActions = AddDirectory | UpdateDirectory | DeleteDirectory | StoreDirectory | FetchDirectory;
