import * as mongoose from 'mongoose';
import {INote} from '../../model/interfaces/note.interface';
import {NoteScheme} from '../mongoose-schemas/note.scheme';

export class NoteMongooseModel {
  public static model: mongoose.Model<INote>;

  static getModel(): mongoose.Model<INote> {
    if (typeof NoteMongooseModel.model === 'undefined') {
      NoteMongooseModel.model = mongoose.model<INote>('Note', new NoteScheme().schema);
    }
    return NoteMongooseModel.model;
  }
}
