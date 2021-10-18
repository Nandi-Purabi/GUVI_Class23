import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { GraphComponent } from './graph/graph.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path : "",
    component:HomeComponent
  },
  {
    path: "create",
    component: CreateComponent
  },
  {
    path : "list",
    component : ListComponent
  },
  {
    path : "login",
    component: LoginComponent
  },
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : "graph",
    component : GraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
