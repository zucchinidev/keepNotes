import {NotesComponent} from '../../notes/notes.component';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainContainerComponent} from '../../main-container/main-container.component';
import {AboutContainerComponent} from '../../about-container/about-container.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
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
  {
    path: '**',
    redirectTo: ''
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});
