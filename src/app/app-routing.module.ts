import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddplanComponent } from './components/addplan/addplan.component';
import { AllRetailersComponent } from './components/all-retailers/all-retailers.component';
import { AllplansComponent } from './components/allplans/allplans.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUPComponent } from './components/sign-up/sign-up.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'allretailers',component:AllRetailersComponent},
  {path:'allplans',component:AllplansComponent},
  {path:'addplan',component:AddplanComponent},
  {path:'signup',component:SignUPComponent},
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,AllRetailersComponent,AllplansComponent,SignUPComponent]
