import {Component, OnInit, Input} from '@angular/core';
import {INote} from '../../interfaces/';

@Component({
  selector: 'note-card',
  templateUrl: 'app/ui/note-card/note-card.component.html',
  styleUrls: ['app/ui/note-card/note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() note: INote;
  showCheck: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.showCheck = !this.showCheck;
  }

  onChecked() {

  }
}
