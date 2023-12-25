import { Component } from '@angular/core';
import { User } from '../user';
import { NasaService } from '../nasa.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user : User = new User();
constructor(private NasaService: NasaService){
 
}
 
PostUser(){
  this.NasaService.addUser(this.user).subscribe(data=>{
    console.log(data);
       },
  error => console.log(error));
}
 
onSubmit(){
  console.log(this.user);
  this.PostUser();
}
 
 
}


