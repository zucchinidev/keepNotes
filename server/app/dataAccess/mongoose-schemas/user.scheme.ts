import * as mongoose from 'mongoose';
import {BaseScheme} from './base.scheme';

export class UserScheme extends BaseScheme {
  private static getDefaulSchema(): Object {
    return {
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      admin: {
        type: Boolean,
        required: true
      }
    };
  }

  constructor() {
    super();
  }

  get schema(): mongoose.Schema {
    return UserScheme.createSchema(UserScheme.getDefaulSchema());
  }
}
