import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/services/app.config.service';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  private baseUrl;
  constructor(private environmentService : AppConfigService ,
    private httpClient: HttpClient) { 
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;

  }

  public getRetailers(): Observable<any>{

    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    
    const url = `${this.baseUrl}/api/v1/Retailer/all`

    return this.httpClient.get(url);
    
  }

  public login(data: any):Observable<any>{
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    const url = `${this.baseUrl}/api/v1/auth/RetailerToken`
    return this.httpClient.post(url,data,{responseType: 'text'});
  }

  
}
