import {IBaseBusiness} from './interfaces/base/base-business.interface';
import {IUser} from '../model/interfaces/user.interface';
import {UserRepository} from '../repository/user-repository';
import * as jwt from 'jsonwebtoken';
import Constants from '../../config/constants/constants';

export class UserBusiness implements IBaseBusiness<IUser> {

  private static getToken(user: IUser): string {
    return jwt.sign(user, Constants.API_SECRET, {
      expiresIn: 3600
    });
  }

  private static createResponseObject({message, state = false, token}:
    {message: string, state?: boolean, token?: string}) {
    return {
      success: state,
      message: message,
      token: token
    };
  }

  private static onFindUser(userSend: IUser, resolve: Function, userFound: IUser) {
    if (userSend.password !== userFound.password) {
      const message = 'Authentication failed. Wrong password.';
      resolve(UserBusiness.createResponseObject({message}));
    } else {
      const token = UserBusiness.getToken(userSend);
      resolve(UserBusiness.createResponseObject({message: '', state: true, token}));
    }
  }

  private static onNotFindUser(reject: Function) {
    const message = 'Authentication failed. User not found.';
    reject(UserBusiness.createResponseObject({message}));
  }

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

  authenticate(user: IUser): Promise<Object> {
    return new Promise<Object>((resolve, reject) => {
      this.repository
        .findUser(user)
        .then(UserBusiness.onFindUser.bind(null, user, resolve))
        .catch(UserBusiness.onNotFindUser.bind(null, reject));
    });
  }
}
