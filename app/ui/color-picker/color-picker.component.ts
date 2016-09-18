import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'color-picker',
  templateUrl: 'app/ui/color-picker/color-picker.component.html',
  styleUrls: ['app/ui/color-picker/color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() colors: Array<string>;
  @Output() selectedColor: EventEmitter<string> = new EventEmitter();


  isSelectorVisible: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  showSelector(value: boolean): void {
    this.isSelectorVisible = value;
  }

  selectColor(color: string): void {
    this.showSelector(false);
    this.selectedColor.next(color);
  }

}
