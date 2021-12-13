import { Component, OnInit } from '@angular/core';
import { RetailerService } from 'src/app/services/retailer.service';

@Component({
  selector: 'app-allplans',
  templateUrl: './allplans.component.html',
  styleUrls: ['./allplans.component.css']
})
export class AllplansComponent implements OnInit {

  public plans:any;
  constructor(public service:RetailerService) { }

  ngOnInit(): void {
    this.getallPlans();
  }

  private getallPlans():void{
    this.service.getallPlans().subscribe(result=>{
      this.plans= result;
    })
  }

  
}
