import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AllRetailersComponent } from './components/all-retailers/all-retailers.component';
import { AppConfigService } from './services/app.config.service';
import { RetailerService } from './services/retailer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AllplansComponent } from './components/allplans/allplans.component';
import { AddplanComponent } from './components/addplan/addplan.component';
import { SignUPComponent } from './components/sign-up/sign-up.component';



const providers = [
  AppConfigService,
  RetailerService
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllRetailersComponent,
    routingComponents,
    AllplansComponent,
    AddplanComponent,
    SignUPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAppConfig,
      deps: [AppConfigService],
      multi: true
    },
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true},
    providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initAppConfig(appConfig: AppConfigService){
  return () => appConfig.loadConfiguration();
}
