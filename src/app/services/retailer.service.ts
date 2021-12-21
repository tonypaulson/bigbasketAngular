import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/services/app.config.service';
import { UserDetails } from '../user-details';



@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  private baseUrl;
  public user : any; 

  
  constructor(private environmentService : AppConfigService ,
    private httpClient: HttpClient) { 
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;

  }

  public userdetails(name:string){
    
    var dc = document.cookie;  
    var prefix = name +"=";  
    var begin = dc.indexOf("; " + prefix);  
    if (begin == -1) {  
        begin = dc.indexOf(prefix);  
        if (begin != 0)return null;  
    } else {  
        begin += 2;  
    }  
    var end = document.cookie.indexOf(";", begin);  
    if (end == -1) {  
        end = dc.length;  
    }  
    return unescape(dc.substring(begin + prefix.length, end));

  }

  public getUser():Observable<any>{
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    const url = `${this.baseUrl}/api/v1/Retailers/user`
    return this.httpClient.get(url);
  }


  public getRetailers(): Observable<any>{

    this.baseUrl = this.environmentService.environment.AssistAPI_URL;    
    const url = `${this.baseUrl}/api/v1/Retailers`
    const user = this.userdetails('id');
    console.log(user)
    return this.httpClient.get(url);
    
  }

  public login(data: any):Observable<any>{
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    const url = `${this.baseUrl}/api/v1/tokens/retailer`
    return this.httpClient.post(url,data,{responseType: 'text'});
  }

  public SignUp(data : any):Observable<any>{
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    const url = `${this.baseUrl}/api/v1/retailers`
    return this.httpClient.post(url,data);
  }

  public getallPlans(): Observable<any>{
    this.baseUrl = this.environmentService.environment.AssistAPI_URL; 
    const id = this.userdetails('id');
    console.log(id)
    const url =`${this.baseUrl}/api/v1/retailers/${id}/plans`
    return this.httpClient.get(url);
  }

  public addPlan(data:any):Observable<any>{
    this.baseUrl = this.environmentService.environment.AssistAPI_URL;
    const id = this.userdetails('id');
    const url = `${this.baseUrl}/api/v1/retailers/${id}/plans`
    return this.httpClient.post(url,data);
  }
  
}
