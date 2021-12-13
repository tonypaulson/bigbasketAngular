import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRetailersComponent } from './components/all-retailers/all-retailers.component';
import { AllplansComponent } from './components/allplans/allplans.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUPComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'allretailers',component:AllRetailersComponent},
  {path:'allplans',component:AllplansComponent},
  {path:'signup',component:SignUPComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,AllRetailersComponent,AllplansComponent,SignUPComponent]
