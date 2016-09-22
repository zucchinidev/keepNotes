import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {INote} from '../interfaces/INote';
import {StoreHelperService} from './store-helper.service';


@Injectable()
export class NoteService {
  private noteUrl: string = 'app/notes';

  private static getJSONHeaders(): Headers {
    return new Headers({
      'Content-Type': 'application/json'
    });
  }

  constructor(private http: Http,
              private storeHelperService: StoreHelperService) {

  }

  getNotes(): Observable<INote[]> {
    return this.get(this.noteUrl)
      .do(res => this.storeHelperService.update('notes', res.data));
  }

  remove(note: INote): Observable<void> {
    return this.delete(`${this.noteUrl}/${note.id}`)
      .do(() => this.storeHelperService.findAndDelete('notes', parseInt(note.id, 10)));
  }

  create(note: INote): Observable<INote> {
    return this.post(this.noteUrl, note)
      .do(savedNote => this.storeHelperService.add('notes', savedNote.data));
  }

  private getJson(response: Response) {
    return response.json();
  }

  private checkForError(response: Response): Response {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error['response'] = response;
      console.log(error);
      throw error;
    }
  }

  private get(url: string): Observable<any> {
    return this.http
      .get(url, {
        headers: NoteService.getJSONHeaders()
      })
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  private post(url: string, body: Object): Observable<any> {
    return this.http
      .post(url, JSON.stringify(body), {
        headers: NoteService.getJSONHeaders()
      })
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  private delete(url: string): Observable<any> {
    return this.http
      .delete(url, {
        headers: NoteService.getJSONHeaders()
      })
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }
}
