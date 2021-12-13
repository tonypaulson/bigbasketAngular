import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addplan',
  templateUrl: './addplan.component.html',
  styleUrls: ['./addplan.component.css']
})
export class AddplanComponent implements OnInit {

  formGroup:FormGroup|any;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
      this.formGroup = new FormGroup({
        Name: new FormControl("",[Validators.required]),
        Amount: new FormControl("",[Validators.required]),
        Details: new FormControl("",[Validators.required]),
        CreatedDate: new FormControl("",[Validators.required]),
        UpdatedDate: new FormControl("",[Validators.required])
      })
  }

}
