import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  visible: boolean = true;
  changeType:boolean = true;
  visible2: boolean = true;
  changeType2: boolean = true;
  apiError: boolean = false;
  isLoading: boolean = false;
  isCheck : boolean = false;
  isNotValidForm: boolean = false
  successMsg: boolean = false





  constructor(private _authService: AuthService, private _router: Router){


  }

  registerForm: FormGroup = new FormGroup({
    userName:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),     // lazem yb2a zy el bake-end
    CPassword:new FormControl("",[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),      // da mesh as7 7aga l2n mesh hayb2o zy b3d [confirom le repassword]
    phoneNumber:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(13)]),




  },{
       validators: this.CPassword

  })


  // conformPassword

  CPassword(registerForm: any){

    let passwordControl = registerForm.get('password');
    let CPasswordControl = registerForm.get('CPassword');
    if (passwordControl?.value == CPasswordControl?.value) {
      return null;
    } else {
      CPasswordControl?.setErrors({
        passwordMatch: 'CPassword must Matched',
      });
      return { passwordMatch: 'CPassword must Matched' };
    }
  }



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

  register(from:FormGroup ){

    if(from.valid){
      this.isLoading = true;
      this.isCheck=true;
      this.successMsg=true
      this._authService.register(from.value).subscribe({
        next:(data:any)=>{
          console.log(data)
          this.isLoading = false;
          this._router.navigate(['/sign-in']);
        },
        error: (err)=> {
          console.log(err.error.message);
          this.apiError=err.error.message;

        }
      })

    }else{

      this.isNotValidForm = true;
    }
  }


}
