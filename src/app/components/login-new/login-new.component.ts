import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent implements OnInit {

  public loginNewForm !:FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router ) { }

  ngOnInit(): void {
    this.loginNewForm = this.formBuilder.group({
      email: [''],
      password:['']
    });
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers").subscribe(data=>{
      const user = data.find((a:any)=>{
        return a.email === this.loginNewForm.value.email && a.password === this.loginNewForm.value.password
      });
      if(user){
alert("Login Successfully !!");
this.loginNewForm.reset();
this.router.navigate(['forms']);
      }
      else{
        alert("User NotFound, Kindly Please Sign-Up !!");
        this.router.navigate(['signup-new']);
      }
    }
    ,error =>{
alert("Something Went Wrong through API");
    });
  }
}
