import * as express from 'express';
import {NotesRoutes} from '../notes-routes';
import {UserRoutes} from '../user-routes';

let app = express();

export class BaseRoutes {
  static routes(): express.Express {
    const notesRoutes = new NotesRoutes();
    const userRoutes = new UserRoutes();
    app.use('/', notesRoutes.getRoutes());
    app.use('/user', userRoutes.getRoutes());
    return app;
  }
}

Object.seal(BaseRoutes);
