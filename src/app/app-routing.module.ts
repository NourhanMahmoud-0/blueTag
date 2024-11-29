import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'sign-up',
    component: SignUpComponent
  },
  {
    path:'sign-in',
    component: SignInComponent
  },

  {
    path:'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'',redirectTo:'sign-up',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
