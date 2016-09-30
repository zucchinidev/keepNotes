import * as express from 'express';
import {NotesRoutes} from '../notes-routes';
import {UserRoutes} from '../user-routes';
import {AuthRoutes} from '../auth-routes';

export class BaseRoutes {
  static routes(): express.Express {
    let app = express();
    const notesRoutes = new NotesRoutes();
    const userRoutes = new UserRoutes();
    const authRoutes = new AuthRoutes();
    app.use('/', authRoutes.getRoutes());
    app.use('/api/note', notesRoutes.getRoutes());
    app.use('/api/user', userRoutes.getRoutes());
    return app;
  }
}

Object.seal(BaseRoutes);
