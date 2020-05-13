import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, RequiredValidator} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm();

  }
  createForm(){
    this.registerForm=this.fb.group({
      email:['',[Validators.email,Validators.required]],
      confirmEmail:['',[Validators.email,Validators.required]],
      confirmPass:['',[Validators.minLength(6),Validators.required]],
      pass:['',[Validators.minLength(6),Validators.required]],
    });

  }
  onSubmit(){
    console.log('registerForm',this.registerForm.value)
  }

  get email() { return this.registerForm.get('email');}
  get password() { return this.registerForm.get('pass');}

}
