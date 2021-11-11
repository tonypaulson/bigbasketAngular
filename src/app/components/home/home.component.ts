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
    this.getRetailers();
  }

private getRetailers():void{
  this.service.getRetailers().subscribe(result=>{
  this.retailers = result;
  });
}

}
