import * as express from 'express';
import {NotesRoutes} from '../notes-routes';

let app = express();

export class BaseRoutes {
  static routes(): express.Express {
    const notesRoutes = new NotesRoutes();
    app.use('/', notesRoutes.getRoutes());
    return app;
  }
}

Object.seal(BaseRoutes);
