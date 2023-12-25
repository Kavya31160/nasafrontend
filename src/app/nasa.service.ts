import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { User } from './registration/user';
import { User } from './user';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private baseUrl="http://localhost:8091/user/v1/saveUser"
  constructor(private httpClient:HttpClient) {
   
  }
  //observable can deliver multiple values of anytype-messages or events(in http modules we use (http client calls ))
  //Assynchronus calls
  addUser(user:User): Observable<User>{
    const url=this.baseUrl;
    return this.httpClient.post<User>(url,user);    
  }
  loginUser(login:Login):Observable<Login>{
    const url="http://localhost:8082/login";
    return this.httpClient.post<User>(url,login);

}
}