import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs';


@Injectable()
export class ApiService {
  private headers: Headers;

  private static getJSONHeaders(): Headers {
    return new Headers({
      'Content-Type': 'application/json'
    });
  }

  private static checkForError(response: Response): Response {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error['response'] = response;
      console.log(error);
      throw error;
    }
  }


  private static getJson(response: Response) {
    return response.json();
  }

  constructor(private http: Http) {
    this.headers = ApiService.getJSONHeaders();
  }

  setHeaders(headers: Object) {
    Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
  }

  get(url: string): Observable<any> {
    return this.http
      .get(url, {
        headers: this.headers
      })
      .map(ApiService.checkForError)
      .catch(err => Observable.throw(err))
      .map(ApiService.getJson);
  }

  post(url: string, body: Object): Observable<any> {
    return this.http
      .post(url, JSON.stringify(body), {
        headers: this.headers
      })
      .map(ApiService.checkForError)
      .catch(err => Observable.throw(err))
      .map(ApiService.getJson);
  }

  remove(url: string): Observable<any> {
    return this.http
      .delete(url, {
        headers: this.headers
      })
      .map(ApiService.checkForError)
      .catch(err => Observable.throw(err))
      .map(ApiService.getJson);
  }
}
