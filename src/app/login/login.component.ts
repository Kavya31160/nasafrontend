import { Component } from '@angular/core';
import { Login } from '../login';
import { NasaService } from '../nasa.service';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public UserInfo: any;
  login: Login = new Login();
  constructor(private NasaService: NasaService) {
  }
  LoginUser() {
    this.NasaService.loginUser(this.login).subscribe((data: any) => {
 
      this.UserInfo = JSON.stringify(data);
 
       const jsonObject = JSON.parse(this.UserInfo);
 
      localStorage.setItem("token",jsonObject.token);
      localStorage.setItem("userId",jsonObject.userId);
 
      console.log(data);
    },
 
      (      error: any) => console.log(error));
  }
  Onlogin() {
    console.log(this.login);
    this.LoginUser();
  }
 
 
 
}
 

