import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RetailerService } from 'src/app/services/retailer.service';


@Component({
  selector: 'app-addplan',
  templateUrl: './addplan.component.html',
  styleUrls: ['./addplan.component.css']
})
export class AddplanComponent implements OnInit {

  formGroup:FormGroup|any;

  constructor(private service:RetailerService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
      this.formGroup = new FormGroup({
        Name: new FormControl("",[Validators.required]),
        Amount: new FormControl("",[Validators.required]),
        Details: new FormControl("",[Validators.required])
      })
  }

  addplan(){

  if(this.formGroup.valid) {
    
    this.service.addPlan(this.formGroup.value).subscribe(result=>{
      if(result!= null){
        alert("plan added");
      }
    })
  }   

  }

}
