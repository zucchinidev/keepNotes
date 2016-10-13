import {InMemoryDbService} from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): Object {
    const notes = [{
      id: 1,
      title: 'new note 1',
      value: 'note here',
      color: 'seagreen'
    }, {
      id: 2,
      title: 'new note 2',
      value: 'note here',
      color: 'tomato'
    }, {
      id: 3,
      title: 'new note 3',
      value: 'note here',
      color: 'olive'
    }, {
      id: 4,
      title: 'new note 4',
      value: 'note here',
      color: 'blue'
    }, {
      id: 5,
      title: 'new note 5',
      value: 'note here',
      color: 'grey'
    }, {
      id: 6,
      title: 'new note 6',
      value: 'note here',
      color: 'red'
    }, {
      id: 7,
      title: 'new note 7',
      value: 'note here',
      color: 'yellow'
    }];
    const signin = {
      email: 'andrea@dale.com',
      password: 'dale'
    };
    return {
      notes,
      signin
    };
  }

}
