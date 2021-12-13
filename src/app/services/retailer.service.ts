import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/services/app.config.service';
import { userdetails } from '../user-details';



@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  private baseUrl;
  public user : any; 
  
  retailer = new userdetails();


  
  constructor(private environmentService : AppConfigService ,
    private httpClient: HttpClient) { 
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;

  }

  public getUser():Observable<any>{
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    const url = `${this.baseUrl}/api/v1/Retailers/user`
    return this.httpClient.get(url);
  }


  public getRetailers(): Observable<any>{

    this.baseUrl = this.environmentService.environment.AssistAPI_URL;    
    const url = `${this.baseUrl}/api/v1/Retailers`
    return this.httpClient.get(url);
    
  }

  public login(data: any):Observable<any>{
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    const url = `${this.baseUrl}/api/v1/tokens/retailer`
    const x =this;
    console.log(x.retailer);
    return this.httpClient.post(url,data,{responseType: 'text'});
  }

  public SignUp(data : any):Observable<any>{
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    const url = `${this.baseUrl}/api/v1/retailers`
    return this.httpClient.post(url,data);
  }

  public getallPlans(): Observable<any>{
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    const url =`${this.baseUrl}/api/v1/retailers/{id}/plans`
    return this.httpClient.get(url);
  }

  public addPlan(data:any):Observable<any>{
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    const url = `${this.baseUrl}/api/v1/Plan/add`
    return this.httpClient.post(url,data);
  }
  
}
