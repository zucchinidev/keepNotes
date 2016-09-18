import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {INote} from '../../interfaces/INote';

@Component({
  selector: 'note-creator',
  templateUrl: 'app/ui/note-creator/note-creator.component.html',
  styleUrls: ['app/ui/note-creator/note-creator.component.css']
})
export class NoteCreatorComponent implements OnInit {
  @Output() createNote: EventEmitter<any> = new EventEmitter();

  colors: Array<string>;
  newNote: INote;
  fullForm: boolean;

  private static createEmptyNote(): INote {
    return {
      title: '',
      value: '',
      color: '',
      id: undefined
    };
  }

  private static getColors() {
    return [
      '#B19CD9',
      '#FF6961',
      '#77DD77',
      '#AEC6CF',
      '#F49AC2',
      '#FFFFFF',
    ];
  }

  constructor() {
    this.newNote = NoteCreatorComponent.createEmptyNote();
    this.fullForm = false;
    this.colors = NoteCreatorComponent.getColors();
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

  onColorSelected(color: string): void {
    this.newNote.color = color;
  }

  private reset(): void {
    this.newNote = NoteCreatorComponent.createEmptyNote();
    this.toggle(false);
  }
}
