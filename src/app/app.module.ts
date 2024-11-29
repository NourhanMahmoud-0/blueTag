import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { NewProductComponent } from './new-product/new-product.component';
import { EditorModule } from 'primeng/editor';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    ForgetPasswordComponent,
    HomeComponent,
    NewProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DropdownModule,
    HttpClientModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PasswordModule,
    FormsModule,
    EditorModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
