import * as express from 'express';

export class BaseController {

  static checkForError(err: any, res: express.Response): void {
    console.error(err.stack);
    res.send({error: 'error in your request'});
  }
}
