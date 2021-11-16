import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../../services/retailer.service';

@Component({
  selector: 'app-all-retailers',
  templateUrl: './all-retailers.component.html',
  styleUrls: ['./all-retailers.component.css']
})
export class AllRetailersComponent implements OnInit {

  public retailers:any;
  constructor(public service:RetailerService) { }

  ngOnInit(): void {
    this.getRetailers();
  }

  private getRetailers():void{
    this.service.getRetailers().subscribe(result=>{
        this.retailers=result;
    });
  }
}
