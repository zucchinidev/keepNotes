import * as jwt from 'jsonwebtoken';
import Constants from '../../config/constants/constants';

export class AuthBusiness {

  constructor() {
  }

  verifyToken(token: string): Promise<Object> {
    return new Promise<Object>((resolve, reject) => {
      if (typeof token === 'string') {
        this.verify(token)
          .then(resolve)
          .catch(reject);
      } else {
        let message = 'No token provided.';
        let success = false;
        reject({success, message});
      }
    });
  }

  private verify(token: string) {
    return new Promise<Object>((resolve, reject) => {
      jwt.verify(token, Constants.API_SECRET, (err, decoded) => {
        let success = !err;
        if (success) {
          resolve({success, decoded});
        } else {
          let message: string;
          if (err instanceof jwt.TokenExpiredError) {
            message = 'Token expired.';
          } else {
            message = 'Failed to authenticate token.';
          }
          reject({success, message});
        }
      });
    });
  }
}
