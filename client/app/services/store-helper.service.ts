import {Injectable} from '@angular/core';
import {Store, State} from '../stores/store';

@Injectable()
export class StoreHelperService {
  constructor(private store: Store) {

  }

  update(prop: string, state: State) {
    const currentState = this.getCurrentState();
    this.store.setState(Object.assign({}, currentState, {
      [prop]: state
    }));
  }

  add(prop: string, state: State) {
    const currentState = this.getCurrentState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, {
      [prop]: [state, ...collection]
    }));
  }

  findAndUpdate(prop: string, state: State) {
    const currentState = this.getCurrentState();
    const collection = currentState[prop];
    const items = collection.map((item: Object) => {
      if (item['_id'] !== state['_id']) {
        return item;
      }
      return Object.assign({}, item, state);
    });
    const sources = {
      [prop]: items
    };
    this.store.setState(Object.assign({}, currentState, sources));
  }


  findAndDelete(prop: string, _id: string) {
    const currentState = this.getCurrentState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, {
      [prop]: collection.filter((item: Object) => item['_id'] !== _id )
    }));
  }

  private getCurrentState(): State {
    return this.store.getState();
  }
}
