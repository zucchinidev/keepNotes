import * as express from 'express';
import {BaseController} from './base/base.controller';
import {AuthBusiness} from '../business/auth.business';
import {IUser} from '../model/interfaces/user.interface';
import {UserBusiness} from '../business/user.business';
import {NextFunction} from 'express';

export class AuthController extends BaseController {
  private authBusiness: AuthBusiness;
  private userBusiness: UserBusiness;

  constructor() {
    super();
    this.authBusiness = new AuthBusiness();
    this.userBusiness = new UserBusiness();
  }

  verifyToken(req: express.Request, res: express.Response, next: NextFunction): void {
    try {
      const token = req.body.token || req.query.token || req.headers['x-access-token'];
      this.authBusiness.verifyToken(token)
        .then(response => {
          req['decoded'] = response['decoded'];
          next();
          return;
        })
        .catch(err => res.status(403).send({error: err.message}));
    } catch (err) {
      AuthController.checkForError(err, res);
    }
  }


  autenticate(req: express.Request, res: express.Response): void {
    try {
      const model = <IUser> req.body;
      this.userBusiness.authenticate(model)
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      AuthController.checkForError(err, res);
    }
  }
}
