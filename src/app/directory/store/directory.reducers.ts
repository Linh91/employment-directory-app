import { Directory } from '../directory.model';

export interface State {
    directories: Directory[];
}

const initialState: State = {
    directories: [
        new Directory('Mandy Harris',
                      '30',
                      'Receptionist',
                      '1 Peckham road, London SE4 9NN'
                      '07553246776'),
        new Directory('Lee Adams',
                      '27',
                      'Marketing Assistant',
                      '10 Spain road, London E16 9MN'
                      '07483994758'),
        new Directory('Tam Lee',
                      '37',
                      'Director',
                      '339 New road, London SE1 7UU'
                      '07978974246'),
        new Directory('Bob Harris',
                      '50',
                      'Marketing Senior',
                      '45 Brooke road, London SE9 3NE'
                      '07097462953'),
        new Directory('Sergio Ramos',
                      '29',
                      'Marketing Manager',
                      '10 Player road, London W12 8NW'
                      '07877740039'),
        new Directory('Ifrah Hassan',
                      '30',
                      'Office Manager',
                      '111 Sensil road, London E9 6CE'
                      '07143349664'),
    ]
};

