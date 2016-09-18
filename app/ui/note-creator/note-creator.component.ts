import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {INote} from '../../interfaces/INote';

@Component({
  selector: 'note-creator',
  templateUrl: 'app/ui/note-creator/note-creator.component.html',
  styleUrls: ['app/ui/note-creator/note-creator.component.css']
})
export class NoteCreatorComponent implements OnInit {
  newNote: INote;
  fullForm: boolean;

  @Output() createNote: EventEmitter<INote> = new EventEmitter();

  private static createEmptyNote(): INote {
    return {
      title: '',
      value: '',
      color: ''
    };
  }

  constructor() {
    this.newNote = NoteCreatorComponent.createEmptyNote();
    this.fullForm = false;
  }

  ngOnInit(): void {

  }

  onCreateNote(): void {
    const {title, value, color} = this.newNote;
    if (title && value) {
      this.createNote.next({
        title, value, color
      });
      this.reset();
    }
  }

  toggle(value: boolean): void {
    this.fullForm = value;
  }

  private reset(): void {
    this.newNote = NoteCreatorComponent.createEmptyNote();
    this.toggle(false);
  }
}
