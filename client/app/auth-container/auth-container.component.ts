import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Component({
  'selector': 'auth-container',
  templateUrl: 'app/auth-container/auth-container.component.html',
  styleUrls: ['app/auth-container/auth-container.component.css']
})
export class AuthContainerComponent {
  static SIGNIN: string = 'signin';
  static SIGNUP: string = 'signup';
  static DONT_ACCOUNT: string = 'Don\'t have an account?';
  static ACCOUNT: string = 'Already have an account?';
  // TODO new UserModel
  user = {
    email: '',
    password: ''
  };
  mode: string = AuthContainerComponent.SIGNIN;
  linkText: string = AuthContainerComponent.DONT_ACCOUNT;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  changeMode(event: MouseEvent) {
    event.preventDefault();
    this.toggleLinkText();
    this.toggleMode();
  }

  authenticate() {
    this.authService.authenticate(this.getUrl(), this.user)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }

  private isSigninMode() {
    return this.mode === AuthContainerComponent.SIGNIN;
  }

  private getUrl() {
    let url = '';
    if (this.isSigninMode()) {
      url = 'authenticate';
    } else {
      url = `${AuthContainerComponent.SIGNUP}`;
    }
    return url;
  }

  private toggleMode() {
    this.mode = this.isSigninMode() ? AuthContainerComponent.SIGNUP : AuthContainerComponent.SIGNIN;
  }

  private toggleLinkText() {
    this.linkText = this.isSigninMode() ? AuthContainerComponent.ACCOUNT : AuthContainerComponent.DONT_ACCOUNT;
  }
}

