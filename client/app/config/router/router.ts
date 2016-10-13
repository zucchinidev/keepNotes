import {NotesComponent} from '../../notes/notes.component';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainContainerComponent} from '../../main-container/main-container.component';
import {AboutContainerComponent} from '../../about-container/about-container.component';
import {AuthContainerComponent} from '../../auth-container/auth-container.component';
import {AuthService} from '../../services/auth.service';

const appRoutes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    canActivate: [AuthService],
    children: [
      {
        path: '',
        component: NotesComponent
      },
      {
        path: 'about',
        component: AboutContainerComponent
      }
    ]
  },
  {path: 'auth', component: AuthContainerComponent},
  {path: '**', redirectTo: ''}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});
