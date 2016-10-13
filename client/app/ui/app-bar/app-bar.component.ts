import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-bar',
  templateUrl: 'app/ui/app-bar/app-bar.component.html',
  styleUrls: ['app/ui/app-bar/app-bar.component.css'],
})
export class AppBarComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  signout(): void {
    this.authService.signout();
  }
}
