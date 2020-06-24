import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup,  FormBuilder } from '@angular/forms';
import { UsersService } from "../services/users.service"

@Component({
  selector: 'app-authin',
  templateUrl: './authin.component.html',
  styleUrls: ['./authin.component.scss']
})
export class AuthinComponent implements OnInit {
  
  
  loginForm:FormGroup;

onLogin(){
  alert("User is Added");
  

}
  
  hide=true;

  constructor(private fb:FormBuilder,private serviceUsers:UsersService) { 
    //hide=true;

    
  }

  ngOnInit() {
    this.createForm();

    
  }
  createForm(){
    this.loginForm=this.fb.group(
      {
        email:['',[Validators.email,Validators.required]],
        pass:['',[Validators.minLength(6),Validators.required]]
      }
    );
  }
  onSubmit(){
    console.log('loginForm',this.loginForm.value);
    this.serviceUsers.authenticate(this.loginForm.value);
  }
  

  

  
}

