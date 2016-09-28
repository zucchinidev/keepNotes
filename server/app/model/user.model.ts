import * as mongoose from 'mongoose';
import {IUser} from './interfaces/user.interface';
import {UserMongooseModel} from '../dataAccess/mongoose-models/user.mongoose-model';


export class UserModel {
  public static instance: mongoose.Model<IUser>;
  static getInstance() {
    if (typeof UserModel.instance === 'undefined') {
      UserModel.instance = UserMongooseModel.getModel();
    }
    return UserModel.instance;
  }
}
