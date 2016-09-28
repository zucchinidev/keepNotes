import * as mongoose from 'mongoose';
import {IUser} from '../../model/interfaces/user.interface';
import {UserScheme} from '../mongoose-schemas/user.scheme';

export class UserMongooseModel {
  public static model: mongoose.Model<IUser>;

  static getModel(): mongoose.Model<IUser> {
    if (typeof UserMongooseModel.model === 'undefined') {
      UserMongooseModel.model = mongoose.model<IUser>('User', new UserScheme().schema);
    }
    return UserMongooseModel.model;
  }
}
