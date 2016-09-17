import './rxjs-extensions';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import {AppRootComponent} from './root/app-root.component';
import {MainContainerComponent} from './main-container/main-container.component';
import {AppBarComponent} from './ui/index';
import {NotesComponent} from './notes/notes.component';
import {NoteCardComponent} from './ui/note-card/note-card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppRootComponent,
    MainContainerComponent,
    AppBarComponent,
    NotesComponent,
    NoteCardComponent
  ],
  providers: [],
  bootstrap: [
    AppRootComponent
  ]
})
export class AppModule {
}
