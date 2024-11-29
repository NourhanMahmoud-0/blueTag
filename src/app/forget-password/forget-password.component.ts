import { Component} from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  isNotValidForm: boolean = false



  forgotPassForm : FormGroup = new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),

  })



  forgotPass(from:FormGroup ){

    if(from.valid){

      console.log('forgot password')

    }
    else{
      this.isNotValidForm = true;
    }

  }



}
