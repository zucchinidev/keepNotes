import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';

export interface Note {
  color: string;
  title: string;
  value: string;
  id?: string;
  createAt?: string;
  updateAt?: string;
  userId?: string;
}

export interface State {
  notes: Note[];
}

const defaultState: State = {
  notes: []
};

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
  private _store = _store;
  changes = this._store.asObservable().distinctUntilChanged();

  setState(state: State) {
    this._store.next(state);
  }

  getState(): State {
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
  }
}
