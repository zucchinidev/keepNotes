import * as express from 'express';
import {NoteController} from '../../app/controllers/note.controller';

export class NotesRoutes {
  private router: express.Router;
  constructor(private controller = new NoteController()) {
    this.router = express.Router();
  }

  getRoutes(): express.Router {
    this.router.get('/notes', this.controller.getAll.bind(this.controller));
    this.router.get('/notes/:id', this.controller.findById.bind(this.controller));
    this.router.post('/notes', this.controller.create.bind(this.controller));
    this.router.put('/notes', this.controller.update.bind(this.controller));
    this.router.patch('/notes', this.controller.patch.bind(this.controller));
    this.router.delete('/notes/:id', this.controller.remove.bind(this.controller));
    return this.router;
  }
}

