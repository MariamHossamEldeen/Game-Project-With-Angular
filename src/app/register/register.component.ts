import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup = new FormGroup({
    first_name : new FormControl(null , [Validators.required , Validators.minLength(9) , Validators.maxLength(20)]),
    last_name : new FormControl(null , [Validators.required , Validators.minLength(9) , Validators.maxLength(20)]),
    email : new FormControl(null , [Validators.required , Validators.email]),
    password : new FormControl(null , [Validators.required ]),
    age : new FormControl(null ,[Validators.required ,Validators.min(18) , Validators.max(60)])
  });
  ErrorMsg : string = ''
  submitForm(data : FormGroup){
    console.log(data);
    this._AuthService.register(data.value).subscribe({
      next:(res) => {
        if(res.message === 'success'){
          this._Router.navigate(['/login']);
        }
        else{
          this.ErrorMsg = res.message ;
        }
      }
    })

  }

  constructor(private _AuthService : AuthService , private _Router : Router) { }

  ngOnInit(): void {
  }

}
