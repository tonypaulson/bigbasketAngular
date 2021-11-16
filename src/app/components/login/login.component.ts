import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RetailerService } from 'src/app/services/retailer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup|any ;

  constructor(public service:RetailerService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup= new FormGroup({
      Username : new FormControl('',[Validators.required]),
      Password: new FormControl('',[Validators.required])
    })
  }

  loginprocess(){
    if(this.formGroup.valid){
      this.service.login(this.formGroup.value).subscribe(result=>{
        if(result!=null)
        {
          console.log(result);
          document.cookie=result;
        }
        else{
          alert("Invalid username or password");
        }
          
      })
    }
  }
}
