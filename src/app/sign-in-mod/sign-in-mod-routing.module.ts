import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInHomeComponent } from './sign-in-home/sign-in-home.component';

const routes: Routes = [
  {path: '', component: SignInHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInModRoutingModule { }
