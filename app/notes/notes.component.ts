import {Component, OnInit, OnDestroy} from '@angular/core';
import {INote} from '../interfaces/';
import {NoteService} from '../services/note.service';
import {Store} from '../stores/store';
import 'rxjs/Rx';
import {Subscription} from 'rxjs';


@Component({
  selector: 'notes-container',
  templateUrl: 'app/notes/notes.component.html',
  styleUrls: ['app/notes/notes.component.css']
})
export class NotesComponent implements OnInit, OnDestroy {
  notes: INote[];
  subscription: Subscription;

  constructor(private noteService: NoteService,
              private store: Store) {
  }

  ngOnInit(): void {
    this.getNotes();
    // on store have the property changes
    this.subscription = this.store.changes.pluck('notes')
      .subscribe((notes: any) => this.notes = notes);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('destroyed');
  }

  onNoteChecked(note: INote, index: number) {
    this.noteService.remove(note)
      .subscribe((n) => this.notes.splice(index, 1));
  }

  onCreateNote(note: INote) {
    this.noteService.create(note)
      .subscribe();
  }

  private getNotes() {
    this.noteService.getNotes()
      .subscribe((res) => this.notes = res['data'] as INote[]);
  }
}
