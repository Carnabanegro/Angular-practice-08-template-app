import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './signup/login/login.component';
import { RegisterComponent } from './signup/register/register.component';
import { NoFoundComponent } from './404/no-found/no-found.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [

  {path: '' , component: PagesComponent,children:[
    {path: 'dashboard', component:DashboardComponent},
    {path: 'progress', component:ProgressComponent},
    {path: 'grafica', component:Grafica1Component},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  ]},
  ///rutas hijas de pages
  
  //rutas hijas de auth
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},

  //routas generales
  {path: 'notFound', component:NoFoundComponent},
  
  {path: '**', redirectTo: 'notFound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
