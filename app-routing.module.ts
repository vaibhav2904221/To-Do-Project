import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './log/login/login.component'
import {AddtoComponent} from './log/addto/addto.component'

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent
},
  {
    path: 'addto',
    component: AddtoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
