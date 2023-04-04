import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'acceuil',
    pathMatch: 'full'
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./pages/acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'not',
    loadChildren: () => import('./pages/not/not.module').then( m => m.NotPageModule)
  },
  {
    path: 'his',
    loadChildren: () => import('./pages/his/his.module').then( m => m.HisPageModule)
  },
  {
    path: 'demande',
    loadChildren: () => import('./pages/demande/demande.module').then( m => m.DemandePageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'appel',
    loadChildren: () => import('./pages/appel/appel.module').then( m => m.AppelPageModule)
  },
  {
    path: 'panne',
    loadChildren: () => import('./panne/panne.module').then( m => m.PannePageModule)
  },
  {
    path: 'depannage',
    loadChildren: () => import('./depannage/depannage.module').then( m => m.DepannagePageModule)
  },
  {
    path: 'annuler',
    loadChildren: () => import('./annuler/annuler.module').then( m => m.AnnulerPageModule)
  },
  {
    path: 'encour',
    loadChildren: () => import('./encour/encour.module').then( m => m.EncourPageModule)
  },
  {
    path: 'terminier',
    loadChildren: () => import('./terminier/terminier.module').then( m => m.TerminierPageModule)
  },
  {
    path: 'panne',
    loadChildren: () => import('./panne/panne.module').then( m => m.PannePageModule)
  },
  {
    path: 'notaff',
    loadChildren: () => import('./notaff/notaff.module').then( m => m.NotaffPageModule)
  },
  {
    path: 'notcam',
    loadChildren: () => import('./notcam/notcam.module').then( m => m.NotcamPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
