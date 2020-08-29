import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AddtoComponent } from './addto/addto.component';
import {UsersService} from  '../service/users.service';



@NgModule({
  declarations: [LoginComponent, AddtoComponent],
  imports: [
    CommonModule
  ]
  

})
export class LogModule { }
