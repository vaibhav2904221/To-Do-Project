import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList } from '@angular/fire/database'
import  {AppComponent} from '../app.component';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  items:AngularFireList<any>
  data=[];
 documentToDomainObject=_=>{
   const object=_.payload;
   object.id=_.payload;
   return object;
 }

  constructor(public db:AngularFireDatabase) { }

  
  senddata(data:any){
       
    this.db.list('items').push(data)
  }


  getData(){
      return this.db.list('items').snapshotChanges()
      .pipe(map(action=>action
        .map(a=>{
          const key= a.payload.key;
          const data= a.payload.val();
          return data;
        })));
}
}