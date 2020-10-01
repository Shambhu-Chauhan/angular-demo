import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { from } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

const routes: Routes = [
  {
    component: AddRestoComponent,
    path: 'add'
  },
  {
    component: ListRestoComponent,
    path: 'list'
  },
  {
    component: LoginComponent,
    path: 'login'
  }, 
  {
    component: RegisterComponent,
    path: 'Register'
  }, 
  {
    component: UpdateRestoComponent,
    path: 'update/:id'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
