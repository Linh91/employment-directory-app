import * as fromDirectories from '../directory/store/directory.reducers';

import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    directories: fromDirectories.State;
}

export const reducers: ActionReducerMap<AppState> = {
    directories: fromDirectories.directoryReducer,
};
