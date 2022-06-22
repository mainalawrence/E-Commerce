import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
    ]),
    ReactiveFormsModule,
    
  ]
})
export class AuthenticationModule { }
