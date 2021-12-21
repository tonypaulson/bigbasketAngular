import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bigbasket-app';

constructor(location:PlatformLocation){
  location.onPopState(()=>{
    console.log('pressed back');
  });
}

  loggedIn(){
  
    return !!document.cookie;
  }
 
  

}




