import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  visible: boolean = true;
  changeType:boolean = true;
  visible2: boolean = true;
  changeType2: boolean = true;
  isLoading: boolean = false;
  apiError: string =''
  isNotValidForm: boolean = false

  constructor(private _authService: AuthService, private _router: Router){



  }

  loginForm: FormGroup = new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",Validators.required),

  })


  // password
  viewPass(){
    this.visible = !this.visible
    this.changeType = !this.changeType
  }
  //conf password
  viewPass2(){
    this.visible2 = !this.visible2
    this.changeType2 = !this.changeType2
  }
  

  login(from:FormGroup ){


    if(from.valid){
      this.isLoading = true;
      this._authService.login(from.value).subscribe({
        next: (data:any) => {
          console.log(data);
          this.isLoading = false;
          this._router.navigate(['/home']);
        },
         error: (err) => {
          console.log(err.error);
          this.apiError = err.error


        }

      })
    }else{
      this.isNotValidForm = true
    }
  }

}
