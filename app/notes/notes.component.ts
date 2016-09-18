import {Component, OnInit} from '@angular/core';
import {INote} from '../interfaces/';

@Component({
  selector: 'notes-container',
  templateUrl: 'app/notes/notes.component.html',
  styleUrls: ['app/notes/notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: INote[];

  constructor() {
    this.notes = [{
      title: 'new note',
      value: 'note here',
      color: 'seagreen'
    }, {
      title: 'new note',
      value: 'note here',
      color: 'tomato'
    }, {
      title: 'new note',
      value: 'note here',
      color: 'olive'
    }, {
      title: 'new note',
      value: 'note here',
      color: 'blue'
    }, {
      title: 'new note',
      value: 'note here',
      color: 'grey'
    }, {
      title: 'new note',
      value: 'note here',
      color: 'red'
    }, {
      title: 'new note',
      value: 'note here',
      color: 'yellow'
    }];
  }

  ngOnInit() {
  }

  onNoteChecked(note: INote, index: number) {
    this.notes.splice(index, 1);
  }

}
