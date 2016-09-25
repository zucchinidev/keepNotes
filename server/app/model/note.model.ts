import * as mongoose from 'mongoose';
import {INote} from './interfaces/note.interface';
import {NoteMongooseModel} from '../dataAccess/mongoose-models/note.mongoose-model';


export class NoteModel {
  public static instance: mongoose.Model<INote>;
  static getInstance() {
    if (typeof NoteModel.instance === 'undefined') {
      NoteModel.instance = NoteMongooseModel.getModel();
    }
    return NoteModel.instance;
  }
}
