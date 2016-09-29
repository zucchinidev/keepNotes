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
        .then((userFound: IUser) => {
          if (user.password !== userFound.password) {
            resolve({
              success: false,
              message: 'Authentication failed. Wrong password.'
            });
          } else {
            resolve({
              success: true,
              token: UserBusiness.getToken(user)
            });
          }
        })
        .catch(() => {
          reject({
            success: false,
            message: 'Authentication failed. User not found.'
          });
        });
    });
  }
}
