import {BaseRepository} from './base/base.repository';
import {INote} from '../model/interfaces/note.interface';
import {NoteModel} from '../model/note.model';

export class NoteRepository extends BaseRepository<INote> {

  constructor() {
    super(NoteModel.getInstance());
  }
}

Object.seal(NoteRepository);
