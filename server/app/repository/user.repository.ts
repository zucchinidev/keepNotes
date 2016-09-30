import {BaseRepository} from './base/base-repository';
import {IUser} from '../model/interfaces/user.interface';
import {UserModel} from '../model/user.model';

export class UserRepository extends BaseRepository<IUser> {

  constructor() {
    super(UserModel.getInstance());
  }

  findUser(item: IUser): Promise<IUser> {
    return this.model.findOne({
      email: item.email,
      name: item.name
    }).exec();
  }
}

Object.seal(UserRepository);
