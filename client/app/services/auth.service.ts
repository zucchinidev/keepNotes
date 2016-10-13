import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ApiService} from './api.service';
import {StoreHelperService} from './store-helper.service';
import {Store} from '../stores/store';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService implements CanActivate {
  JWT_KEY: string = 'retain_token';
  constructor(private router: Router,
              private apiService: ApiService,
              private storeHelper: StoreHelperService,
              private store: Store) {
    this.setJwt(this.getJWTItem() || '');
  }

  setJwt(jwt: string): void {
    window.localStorage.setItem(this.JWT_KEY, jwt);
    this.apiService.setHeaders({
      Authorization: `Bearer ${jwt}`
    });
  }

  authenticate(path: string, creds: Object): Observable<any> {
    return this.apiService.post(`/${path}`, creds)
      .do(res => {
        if (typeof res.token === 'undefined') {
          Observable.throw({
            error: res.message
          });
        } else {
          this.setJwt(res.token);
        }
      })
      .do(res => {
        this.storeHelper.update('user', res.user);
      });
  }

  signout(): void {
    window.localStorage.removeItem(this.JWT_KEY);
    this.store.purge();
    this.router.navigate(['', 'auth']);
  }

  isAuthorized(): boolean {
    return Boolean(this.getJWTItem());
  }

  canActivate(): boolean {
    const isAuth = this.isAuthorized();

    if (!isAuth) {
      this.router.navigate(['', 'auth']);
    }

    return isAuth;
  }

  private getJWTItem() {
    return window.localStorage.getItem(this.JWT_KEY);
  }
}
