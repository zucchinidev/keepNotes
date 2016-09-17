import { Component, OnInit, Input } from '@angular/core';
interface INote {
    title: string;
    value: string;
}
@Component({
    selector: 'note-card',
    templateUrl: 'app/ui/note-card/note-card.component.html',
    styleUrls: ['app/ui/note-card/note-card.component.css']
})
export class NoteCardComponent implements OnInit {
    @Input() note: INote;
    constructor() { }

    ngOnInit():void { }

    onChecked() {

    }
}
