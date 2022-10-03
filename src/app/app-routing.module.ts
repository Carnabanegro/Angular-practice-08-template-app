import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoFoundComponent } from './404/no-found/no-found.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './signup/auth.routing';


const routes: Routes = [

  // path: /dashboard routes from pagesRoutingModule
  // path: /auth routes from authRoutingModule


  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'notFound', component:NoFoundComponent},
  {path: '**', redirectTo: 'notFound'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
