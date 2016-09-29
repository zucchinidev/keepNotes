import * as express from 'express';
import {UserController} from '../../app/controllers/user.controller';

export class UserRoutes {
  private router: express.Router;
  constructor(private controller = new UserController()) {
    this.router = express.Router();
  }

  getRoutes(): express.Router {
    this.router.get('/', this.controller.getAll.bind(this.controller));
    this.router.get('/:id', this.controller.findById.bind(this.controller));
    this.router.post('/', this.controller.create.bind(this.controller));
    this.router.put('/', this.controller.update.bind(this.controller));
    this.router.patch('/', this.controller.patch.bind(this.controller));
    this.router.delete('/:id', this.controller.remove.bind(this.controller));
    this.router.post('/authenticate', this.controller.autenticate.bind(this.controller));
    return this.router;
  }
}

