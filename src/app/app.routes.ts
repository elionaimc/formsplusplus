import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'allfields-list',
    loadComponent: () => import('./allFields/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'allfields-detail',
    loadComponent: () => import('./allFields/detail/detail.page').then( m => m.DetailPage)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
