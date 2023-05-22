import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInModRoutingModule } from './sign-in-mod-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInHomeComponent } from './sign-in-home/sign-in-home.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignInHomeComponent
  ],
  imports: [
    CommonModule,
    SignInModRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignInModModule { }
