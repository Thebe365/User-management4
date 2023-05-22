import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpModRoutingModule } from './sign-up-mod-routing.module';
import { SignUpHomeComponent } from './sign-up-home/sign-up-home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignUpHomeComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpModRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SignUpModModule { }
