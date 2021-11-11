import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../../services/retailer.service';

@Component({
  selector: 'app-all-retailers',
  templateUrl: './all-retailers.component.html',
  styleUrls: ['./all-retailers.component.css']
})
export class AllRetailersComponent implements OnInit {

  constructor(public service:RetailerService) { }

  ngOnInit(): void {
  }

}
