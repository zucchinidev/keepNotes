import {Component, OnInit, OnDestroy} from '@angular/core';
import {INote} from '../interfaces/';
import {NoteService} from '../services/note.service';

@Component({
  selector: 'notes-container',
  templateUrl: 'app/notes/notes.component.html',
  styleUrls: ['app/notes/notes.component.css']
})
export class NotesComponent implements OnInit, OnDestroy {
  notes: INote[];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }

  onNoteChecked(note: INote, index: number) {
    this.noteService.remove(note)
      .subscribe((n) => this.notes.splice(index, 1));
  }

  onCreateNote(note: INote) {
    this.noteService.create(note)
      .subscribe((res) => this.notes.push(res['data'] as INote));
  }

  private getNotes() {
    this.noteService.getNotes()
      .subscribe((res) => this.notes = res['data'] as INote[]);
  }
}
