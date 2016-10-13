import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {INote} from '../interfaces/INote';
import {StoreHelperService} from './store-helper.service';
import {ApiService} from './api.service';


@Injectable()
export class NoteService {
  private noteUrl: string = 'api/note';


  constructor(private storeHelperService: StoreHelperService,
              private apiService: ApiService) {
  }

  getNotes(): Observable<INote[]> {
    return this.apiService.get(this.noteUrl)
      .do(res => this.storeHelperService.update('notes', res));
  }

  remove(note: INote): Observable<void> {
    return this.apiService.remove(`${this.noteUrl}/${note._id}`)
      .do(() => this.storeHelperService.findAndDelete('notes', note._id));
  }

  create(note: INote): Observable<INote> {
    return this.apiService.post(this.noteUrl, note)
      .do(savedNote => this.storeHelperService.add('notes', savedNote));
  }
}
