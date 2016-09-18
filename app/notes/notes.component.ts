import {Component, OnInit} from '@angular/core';
import {INote} from '../interfaces/';

@Component({
  selector: 'notes-container',
  templateUrl: 'app/notes/notes.component.html',
  styleUrls: ['app/notes/notes.component.css']
})
export class NotesComponent implements OnInit {
  note: INote;

  constructor() {
    this.note = {
      title: 'new note',
      value: 'note here',
      color: 'seagreen'
    };
  }

  ngOnInit() {
  }

}
