import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup,  FormBuilder } from '@angular/forms';



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

  constructor(private fb:FormBuilder) { 
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
  }
  
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('pass'); }
  equalCheck(){
    console.log('Mat-Error',"works check");

    if (this.loginForm.get('email')==this.loginForm.get('confirmEmail')){
        return true;
        
    }

  }
}

