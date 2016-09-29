import * as express from 'express';
import {IBaseController} from './interfaces/base/base-controller.interface';
import {BaseController} from './base/base.controller';
import {UserBusiness} from '../business/user-business';
import {IUser} from '../model/interfaces/user.interface';

export class UserController extends BaseController implements IBaseController {
  private userBusiness: UserBusiness;
  constructor() {
    super();
    this.userBusiness = new UserBusiness();
  }

  getAll(req: express.Request, res: express.Response): void {
    try {
      this.userBusiness.getAll()
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      UserController.checkForError(err, res);
    }
  }

  findById(req: express.Request, res: express.Response): void {
    try {
      const id = req.params.id;
      this.userBusiness.findById(id)
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      UserController.checkForError(err, res);
    }
  }

  create(req: express.Request, res: express.Response): void {
    try {
      const model = <IUser> req.body;
      this.userBusiness.create(model)
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      UserController.checkForError(err, res);
    }
  }

  update(req: express.Request, res: express.Response): void {
    try {
      const model = <IUser> req.body;
      this.userBusiness.update(model._id, model)
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      UserController.checkForError(err, res);
    }
  }

  remove(req: express.Request, res: express.Response): void {
    try {
      const id = req.params.id;
      this.userBusiness.remove(id)
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      UserController.checkForError(err, res);
    }
  }

  patch(req: express.Request, res: express.Response): void {
    try {
      const model = <IUser> req.body;
      this.userBusiness.patch(model._id, model)
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      UserController.checkForError(err, res);
    }
  }


  autenticate(req: express.Request, res: express.Response): void {
    try {
      const model = <IUser> req.body;
      this.userBusiness.authenticate(model)
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      UserController.checkForError(err, res);
    }
  }
}
