import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {UsersService} from 'src/app/service/users.service';
@Component({
  selector: 'app-addto',
  templateUrl: './addto.component.html',
  styleUrls: ['./addto.component.css']
})
export class AddtoComponent implements OnInit {
  showData=[];
  constructor(private usersservice:UsersService) { }

  ngOnInit(): void {
  }

  additemsform= new FormGroup({
 
  title:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
  icon: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
  startdate: new FormControl('',Validators.required),
  enddate:new FormControl('',Validators.required),
});
get title(){
  return this.additemsform.get('title')
}
get icon(){
     return this.additemsform.get('icon')
}
get startdate(){
  return this.additemsform.get('startdate')
}
get enddate(){
  return this.additemsform.get('enddate')
}
 
add(){
  this.usersservice.senddata(this.additemsform.value)
  this.additemsform.reset()

}

view(){
  this.usersservice.getData()
  .subscribe((res=>{
    console.log("res", res)
    this.showData=res;
  }))
}
}
