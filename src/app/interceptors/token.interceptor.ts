import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(){}

    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        const secret = document.cookie;
        request = this.addAPIKeyToRequest(request,secret);
        return next.handle(request);
    }
    private addAPIKeyToRequest(request:HttpRequest<any>,secret:string){
        return request.clone({
            setHeaders:{
                Authorization:`Bearer${secret}`
            }
        });
    }
}
export const TokenInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi:true},
];