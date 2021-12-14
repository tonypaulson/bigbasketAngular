import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RetailerService } from 'src/app/services/retailer.service';
import { UserDetails } from 'src/app/user-details';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup|any;

  constructor(public service:RetailerService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup= new FormGroup({
      Email : new FormControl("",[Validators.required]),
      Password: new FormControl("",[Validators.required])
    })
  }

  loginprocess(){
    if(this.formGroup.valid){
      this.service.login(this.formGroup.value).subscribe(result=>{
        if(result!=null)
        {
          console.log(result);
          document.cookie=`token=${result}`;
          const x = this;
          this.service.getUser().subscribe(result=>{
            console.log(result);
            UserDetails.Id = result.Id;
            UserDetails.Email = result.Email;
            UserDetails.Username = result.Username;
          })          
        }
        else{
          alert("Invalid username or password");
        }
      })
    }
  }
}
