import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'search',
    loadComponent: () => import('./features/search/search').then((m) => m.Search),
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile').then((m) => m.Profile),
  },
  {
    path: 'assistant',
    loadComponent: () => import('./features/assistant/assistant').then((m) => m.Assistant),
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('./features/search/search').then((m) => m.Search),
  },
];
