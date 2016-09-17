import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notes-container',
    templateUrl: 'app/notes/notes.component.html',
    styleUrls: ['app/notes/notes.component.css']
})
export class NotesComponent implements OnInit {
    note: Object;
    constructor() {
        this.note = {
            title: 'new note',
            value: 'note here'
        };
    }

    ngOnInit() { }

}
