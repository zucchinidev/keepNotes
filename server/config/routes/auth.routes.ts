import * as express from 'express';
import {AuthController} from '../../app/controllers/auth.controller';

export class AuthRoutes {
  private router: express.Router;

  constructor(private controller = new AuthController()) {
    this.router = express.Router();
  }

  getRoutes(): express.Router {
    this.router.all('/api/*', this.controller.verifyToken.bind(this.controller));
    this.router.post('/authenticate', this.controller.autenticate.bind(this.controller));
    this.router.post('/signup', this.controller.signup.bind(this.controller));
    return this.router;
  }
}

