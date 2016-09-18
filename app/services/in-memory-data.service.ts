import {InMemoryDbService} from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): Object {
    const notes = [{
      title: 'new note 1',
      value: 'note here',
      color: 'seagreen'
    }, {
      title: 'new note 2',
      value: 'note here',
      color: 'tomato'
    }, {
      title: 'new note 3',
      value: 'note here',
      color: 'olive'
    }, {
      title: 'new note 4',
      value: 'note here',
      color: 'blue'
    }, {
      title: 'new note 5',
      value: 'note here',
      color: 'grey'
    }, {
      title: 'new note 6',
      value: 'note here',
      color: 'red'
    }, {
      title: 'new note 7',
      value: 'note here',
      color: 'yellow'
    }];
    return {
      notes
    };
  }

}
