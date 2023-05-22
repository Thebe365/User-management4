import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpHomeComponent } from './sign-up-home/sign-up-home.component';

const routes: Routes = [
  {path: '', component: SignUpHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpModRoutingModule { }
