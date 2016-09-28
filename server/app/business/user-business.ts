import {IBaseBusiness} from './interfaces/base/base-business.interface';
import {IUser} from '../model/interfaces/user.interface';
import {UserRepository} from '../repository/user-repository';

export class UserBusiness implements IBaseBusiness<IUser> {

  constructor(public repository: UserRepository = new UserRepository()) {}

  getAll(): Promise<Array<IUser>> {
    return new Promise<Array<IUser>>((resolve, reject) => {
      return this.repository
        .getAll()
        .then(resolve)
        .catch(reject);
    });
  }

  findById(_id: string): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
      this.repository
        .findById(_id)
        .then(resolve)
        .catch(reject);
    });
  }

  create(item: IUser): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
      this.repository
        .create(item)
        .then(resolve)
        .catch(reject);
    });
  }

  update(_id: string, item: IUser): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
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

  patch(_id: string, item: IUser): Promise<Object> {
    return new Promise<IUser>((resolve, reject) => {
      this.repository
        .patch(_id, item)
        .then(resolve)
        .catch(reject);
    });
  }
}
