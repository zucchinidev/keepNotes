import {IBaseBusiness} from './interfaces/base/base-business.interface';
import {INote} from '../model/interfaces/note.interface';
import {NoteRepository} from '../repository/note-reposotory';

export class NoteBusiness implements IBaseBusiness<INote> {

  constructor(public repository: NoteRepository = new NoteRepository()) {}

  getAll(): Promise<Array<INote>> {
    return new Promise<Array<INote>>((resolve, reject) => {
      return this.repository
        .getAll()
        .then(resolve)
        .catch(reject);
    });
  }

  findById(_id: string): Promise<INote> {
    return new Promise<INote>((resolve, reject) => {
      this.repository
        .findById(_id)
        .then(resolve)
        .catch(reject);
    });
  }

  create(item: INote): Promise<INote> {
    return new Promise<INote>((resolve, reject) => {
      this.repository
        .create(item)
        .then(resolve)
        .catch(reject);
    });
  }

  update(_id: string, item: INote): Promise<INote> {
    return new Promise<INote>((resolve, reject) => {
      this.repository
        .update(_id, item)
        .then(resolve)
        .catch(reject);
    });
  }

  remove(_id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.repository
        .remove(_id)
        .then(resolve)
        .catch(reject);
    });
  }

  patch(_id: string, item: INote): Promise<Object> {
    return new Promise<INote>((resolve, reject) => {
      this.repository
        .patch(_id, item)
        .then(resolve)
        .catch(reject);
    });
  }
}
