import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {INote} from '../interfaces/INote';


@Injectable()
export class NoteService {
  private noteUrl: string = 'app/notes';

  private static getJSONHeaders(): Headers {
    return new Headers({
      'Content-Type': 'application/json'
    });
  }

  constructor(private http: Http) {

  }

  getNotes(): Promise<INote[]> {
    return this.get(this.noteUrl)
      .toPromise()
      .then((response) => response.data as INote[]);
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
