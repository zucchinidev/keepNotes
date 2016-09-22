import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
import {INote} from '../interfaces/INote';

export interface State {
  notes: INote[];
}

const defaultState: State = {
  notes: []
};

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
  private _store = _store;
  changes = this._store.asObservable()
    .distinctUntilChanged()
    .do(() => console.log('changes!!'));

  setState(state: State) {
    console.log('state set: ', state);
    this._store.next(state);
  }

  getState(): State {
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
  }
}
