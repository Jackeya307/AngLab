import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  LoginPracticeComponent } from './login-practice/login-practice.component';
import { ArticleComponent } from './article/article.component';
import { ShareInputComponent } from './share-input/share-input.component';
import { LoginTableShareInputComponent } from './login-table-share-input/login-table-share-input.component';
import { LoginInputShareInputComponent } from './login-input-share-input/login-input-share-input.component';
import { LoginTableShareOuputComponent } from './login-table-share-ouput/login-table-share-ouput.component';
import { HttpClientModule } from '@angular/common/http';
import { MyDatePipe } from './pipes/my-date.pipe';
import { SignupComponent } from './form/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPracticeComponent,
    ArticleComponent,
    ShareInputComponent,
    LoginTableShareInputComponent,
    LoginInputShareInputComponent,
    LoginTableShareOuputComponent,
    MyDatePipe,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
