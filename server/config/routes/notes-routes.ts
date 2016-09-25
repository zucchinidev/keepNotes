import * as express from 'express';
import {NoteController} from '../../app/controllers/note.controller';

const notes = [{
  id: 1,
  title: 'new note 1',
  value: 'note here',
  color: 'seagreen'
}, {
  id: 2,
  title: 'new note 2',
  value: 'note here',
  color: 'tomato'
}, {
  id: 3,
  title: 'new note 3',
  value: 'note here',
  color: 'olive'
}, {
  id: 4,
  title: 'new note 4',
  value: 'note here',
  color: 'blue'
}, {
  id: 5,
  title: 'new note 5',
  value: 'note here',
  color: 'grey'
}, {
  id: 6,
  title: 'new note 6',
  value: 'note here',
  color: 'red'
}, {
  id: 7,
  title: 'new note 7',
  value: 'note here',
  color: 'yellow'
}];

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

