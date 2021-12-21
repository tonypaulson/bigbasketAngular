import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RetailerService } from 'src/app/services/retailer.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {
  formGroup: FormGroup| any;

  constructor(public service:RetailerService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      Username : new FormControl("",[Validators.required]),
      Email : new FormControl("",[Validators.required,Validators.email]),
      Password : new FormControl("",[Validators.required])
     
    })
  }

signinprocess(){
  if(this.formGroup.valid){
    this.service.SignUp(this.formGroup.value).subscribe(result=>{
      if(result.id == 0){       
          alert("This Email id Already Exists")
      }
      else{
          alert("Retailer registered")
          this.router.navigate(['/user'])
      }
    })
  }
}

}
