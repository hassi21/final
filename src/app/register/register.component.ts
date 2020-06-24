import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, RequiredValidator} from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private fb:FormBuilder,private serviceUsers:UsersService) { }
  

  ngOnInit() {
    this.createForm();

  }
  createForm(){
    this.registerForm=this.fb.group({
      email:['',[Validators.email,Validators.required]],
      pass:['',[Validators.minLength(6),Validators.required]],
      name:['', [Validators.required]],
      phoneNumber:['',[Validators.required]],
      city:['',[Validators.required]],
      gender:['',[]]
    });

  }
  onSubmit(){
    console.log('registerForm',this.registerForm.value);
    this.serviceUsers.createUser(this.registerForm.value);

  //   console.log(this.serviceUsers.createUser({
  //     "name": "Sunni",
  //     "email": "test3@test.com",
  //     "password": "12345678",
  //     "phoneNumber": "03002",
  //     "city": "Pindi",
  //     "gender": "true"
  // }),'Hogya Pai');

  }

  get email() { return this.registerForm.get('email');}
  get password() { return this.registerForm.get('pass');}

}
