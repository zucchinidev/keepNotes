import {BaseRepository} from './base/base-repository';
import {IUser} from '../model/interfaces/user.interface';
import {UserModel} from '../model/user.model';

export class UserRepository extends BaseRepository<IUser> {

  constructor() {
    super(UserModel.getInstance());
  }
}

Object.seal(UserRepository);
