import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RetailerService } from 'src/app/services/retailer.service';
import { UserDetails } from 'src/app/user-details';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup|any;

  constructor(public service:RetailerService,private router:Router) { }

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
      
      var cookie = document.cookie.split(';');

      for (var i = 0; i < cookie.length; i++) {

      var chip = cookie[i],
        entry = chip.split("="),
        name = entry[0];

        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

      this.service.login(this.formGroup.value).subscribe(result=>{
        if(result!=null)
        {
          console.log(result);
          document.cookie=`token=${result}`;
          const x = this;
          this.service.getUser().subscribe(result=>{
            console.log(result);
            UserDetails.Id = result.id;
            UserDetails.Email = result.email;
            UserDetails.Username = result.username;  
            document.cookie=`id=${UserDetails.Id}`;
            console.log(UserDetails.Id);
            this.router.navigate(['/user']);
          })   
          
           
        }
        else{
          alert("Invalid username or password");
        }
      })
    }
  }
}
