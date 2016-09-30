import * as express from 'express';
import {IBaseController} from './interfaces/base/base-controller.interface';
import {NoteBusiness} from '../business/note.business';
import {BaseController} from './base/base.controller';
import {INote} from '../model/interfaces/note.interface';

export class NoteController extends BaseController implements IBaseController {
  private noteBusiness: NoteBusiness;
  constructor() {
    super();
    this.noteBusiness = new NoteBusiness();
  }

  getAll(req: express.Request, res: express.Response): void {
    try {
      this.noteBusiness.getAll()
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      NoteController.checkForError(err, res);
    }
  }

  findById(req: express.Request, res: express.Response): void {
    try {
      const id = req.params.id;
      this.noteBusiness.findById(id)
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      NoteController.checkForError(err, res);
    }
  }

  create(req: express.Request, res: express.Response): void {
    try {
      const model = <INote> req.body;
      this.noteBusiness.create(model)
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      NoteController.checkForError(err, res);
    }
  }

  update(req: express.Request, res: express.Response): void {
    try {
      const model = <INote> req.body;
      this.noteBusiness.update(model._id, model)
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      NoteController.checkForError(err, res);
    }
  }

  remove(req: express.Request, res: express.Response): void {
    try {
      const id = req.params.id;
      this.noteBusiness.remove(id)
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      NoteController.checkForError(err, res);
    }
  }

  patch(req: express.Request, res: express.Response): void {
    try {
      const model = <INote> req.body;
      this.noteBusiness.patch(model._id, model)
        .then(response => res.send(response))
        .catch(err => res.send({error: err.message}));
    } catch (err) {
      NoteController.checkForError(err, res);
    }
  }


}
