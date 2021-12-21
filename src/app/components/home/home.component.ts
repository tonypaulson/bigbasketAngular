import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../../services/retailer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public retailers:any;
  constructor(public service:RetailerService) { }

  ngOnInit(): void {
    
    // this.deletecookie();
  }

  loggedIn(){
  
    return !!document.cookie;
  }

  // deletecookie(){
    
  //   var cookie = document.cookie.split(';');

  //     for (var i = 0; i < cookie.length; i++) {

  //     var chip = cookie[i],
  //       entry = chip.split("="),
  //       name = entry[0];

  //       document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  //     }


  // }
}
