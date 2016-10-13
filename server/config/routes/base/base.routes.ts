import * as express from 'express';
import {NotesRoutes} from '../notes.routes';
import {UserRoutes} from '../user.routes';
import {AuthRoutes} from '../auth.routes';
import * as path from 'path';

export class BaseRoutes {
  static routes(): express.Express {
    let app = express();
    const notesRoutes = new NotesRoutes();
    const userRoutes = new UserRoutes();
    const authRoutes = new AuthRoutes();
    app.use('/', authRoutes.getRoutes());
    app.use('/api/note', notesRoutes.getRoutes());
    app.use('/api/user', userRoutes.getRoutes());
    app.get('*', (req: express.Request, res: express.Response) => {
      let pathIndex = '../../../../public/index.html';
      let indexPath = path.resolve(__dirname, pathIndex);
      console.log(indexPath);
      res.set('Content-Type', 'text/html');
      res.sendFile(indexPath, { root: __dirname });
    });
    return app;
  }
}

Object.seal(BaseRoutes);
