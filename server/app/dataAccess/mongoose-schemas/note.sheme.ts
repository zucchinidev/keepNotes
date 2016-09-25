import * as mongoose from 'mongoose';
import {BaseScheme} from './base.scheme';

export class NoteScheme extends BaseScheme {
  constructor() {
    super();
  }

  private static getDefaulSchema(): Object {
    return {
      title: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: false
      },
      color: {
        type: String,
        required: true
      }
    };
  }

  get schema(): mongoose.Schema {
    return NoteScheme.createSchema(NoteScheme.getDefaulSchema());
  }
}
