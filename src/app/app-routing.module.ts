import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRetailersComponent } from './components/all-retailers/all-retailers.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'allretailers',component:AllRetailersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,AllRetailersComponent]
