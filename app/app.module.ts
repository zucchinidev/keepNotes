import './rxjs-extensions';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {routing} from './config/router/router';
import {AppRootComponent} from './root/app-root.component';
import {MainContainerComponent} from './main-container/main-container.component';
import {AppBarComponent, NoteCardComponent, NoteCreatorComponent} from './ui/index';
import {NotesComponent} from './notes/notes.component';
import {ColorPickerComponent} from './ui/color-picker/color-picker.component';
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';
import {NoteService} from './services/note.service';
import {AboutContainerComponent} from './about-container/about-container.component';
import {Store} from './stores/store';
import {StoreHelperService} from './services/store-helper.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppRootComponent,
    MainContainerComponent,
    AppBarComponent,
    NotesComponent,
    NoteCardComponent,
    NoteCreatorComponent,
    ColorPickerComponent,
    AboutContainerComponent
  ],
  providers: [
    Store,
    StoreHelperService,
    NoteService
  ],
  bootstrap: [
    AppRootComponent
  ]
})
export class AppModule {
}
