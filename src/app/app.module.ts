import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AllRetailersComponent } from './components/all-retailers/all-retailers.component';
import { AppConfigService } from './services/app.config.service';
import { RetailerService } from './services/retailer.service';

const providers = [
  AppConfigService,
  RetailerService
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllRetailersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAppConfig,
      deps: [AppConfigService],
      multi: true
    },
    providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initAppConfig(appConfig: AppConfigService){
  return () => appConfig.loadConfiguration();
}
