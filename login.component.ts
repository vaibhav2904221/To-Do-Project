import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {FormGroup, FormControl,Validator, Validators} from '@angular/forms';
import {UsersService} from  'src/app/service/users.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersservice:UsersService) { }

  ngOnInit(): void {
  }

  loginform=new FormGroup({
       email:new FormControl('',Validators.required),
       password: new FormControl('',Validators.required),
  });

get email(){
  return this.loginform.get('email')
}
get password(){
     return this.loginform.get('password');
}

  login(){
           
    this.usersservice.senddata(this.loginform.value)
    this.loginform.reset()
 
  }

}
