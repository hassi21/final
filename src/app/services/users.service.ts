import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from './config.js';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  authenticate(credentials:object){
    console.log("got in");
    const url=config.getBaseUrl() + '/user/signin'
    this.http.post(url,credentials).subscribe(data=>{
      console.log(data,"here2");
      return data;

    },error=>{
      console.log(error+'Here');
      throw error;
    });
  }

  createUser(user:object){
    console.log("got in");
    const url=config.getBaseUrl() + '/user/signup'
    this.http.post('http://192.168.10.4:2966/api/user/signup',user).subscribe(data=>{
      console.log(data,"here");
      return data;
    },error=>{
      console.log(error,"error Oe!");
      throw error;
    });
  }


  logout(){
    const url=config.getBaseUrl() + '/user/signout'
    return  this.http.get(url);
  }

  updateUser(newCredentials:object){
    const url=config.getBaseUrl() + '/user/edit'
    return  this.http.post(url,newCredentials);
  }

}
