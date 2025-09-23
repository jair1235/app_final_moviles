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
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'educacion',
    loadComponent: () => import('./pages/educacion/educacion.page').then( m => m.EducacionPage)
  },
  {
    path: 'presupuesto',
    loadComponent: () => import('./pages/presupuesto/presupuesto.page').then( m => m.PresupuestoPage)
  },
    {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full',
      },
];
