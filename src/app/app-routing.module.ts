import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./sign-in-mod/sign-in-mod.module').then(m => m.SignInModModule)},
  {path: 'sign-up', loadChildren: () => import('./sign-up-mod/sign-up-mod.module').then(m => m.SignUpModModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard-mod/dashboard-mod.module').then(m => m.DashboardModModule)},
  {path: 'sign-in', loadChildren: () => import('./sign-in-mod/sign-in-mod.module').then(m => m.SignInModModule)},
  {path: '**', loadChildren: () => import('./not-found-mod/not-found-mod.module').then(m => m.NotFoundModModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
