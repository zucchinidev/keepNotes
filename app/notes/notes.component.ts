import {Component, OnInit} from '@angular/core';
import {INote} from '../interfaces/';
import {NoteService} from '../services/note.service';

@Component({
  selector: 'notes-container',
  templateUrl: 'app/notes/notes.component.html',
  styleUrls: ['app/notes/notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: INote[];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  onNoteChecked(note: INote, index: number) {
    this.notes.splice(index, 1);
  }

  onCreateNote(note: INote) {
    this.notes.push(note);
  }

  private getNotes() {
    this.noteService.getNotes()
      .then((notes: INote[]) => this.notes = notes);
  }
}
