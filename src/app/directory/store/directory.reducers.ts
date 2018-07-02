import { Directory } from '../directory.model';
import * as DirectoryActions from './directory.actions';

export interface DirectoryState {
    directories: State;
}

export interface State {
    directories: Directory[];
}

const initialState: State = {
    directories: [
        new Directory('Mandy Harris',
                      30,
                      'Receptionist',
                      '1 Peckham road, London SE4 9NN',
                      '07553246776'),
        new Directory('Lee Adams',
                      27,
                      'Marketing Assistant',
                      '10 Spain road, London E16 9MN',
                      '07483994758'),
        new Directory('Tam Lee',
                      37,
                      'Director',
                      '339 New road, London SE1 7UU',
                      '07978974246'),
        new Directory('Bob Harris',
                      50,
                      'Marketing Senior',
                      '45 Brooke road, London SE9 3NE',
                      '07097462953'),
        new Directory('Sergio Ramos',
                      29,
                      'Marketing Manager',
                      '10 Player road, London W12 8NW',
                      '07877740039'),
        new Directory('Ifrah Hassan',
                      30,
                      'Office Manager',
                      '111 Sensil road, London E9 6CE',
                      '07143349664'),
    ]
};

export function directoryReducer(state = initialState, action: DirectoryActions.DirectoryActions) {
    switch (action.type) {
        case(DirectoryActions.ADD_DIRECTORY):
            return {
                ...state,
                directories: [...state.directories, action.payload]
            };
        case(DirectoryActions.UPDATE_DIRECTORY):
            const directory = state.directories[action.payload.index]; // old directory
            const UpdateDirectory = {
                ...directory,
                ...action.payload.updateDirectory
            };
            const directories = [...state.directories];
            directories[action.payload.index] = UpdateDirectory;
            return {
                ...state,
                disctories: directories
            };
        case(DirectoryActions.DELETE_DIRECTORY):
            const oldDirectories = [...state.directories];
            oldDirectories.splice(action.payload, 1);
            return {
                ...state,
                directories: oldDirectories
            };
        }
        return state;
}

