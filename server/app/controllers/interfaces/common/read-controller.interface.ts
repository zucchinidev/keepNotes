import * as express from 'express';

export interface IReadController {
  getAll(req: express.Request, res: express.Response): void;
  findById(req: express.Request, res: express.Response): void;
}
