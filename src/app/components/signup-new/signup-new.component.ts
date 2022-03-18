import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-new',
  templateUrl: './signup-new.component.html',
  styleUrls: ['./signup-new.component.css']
})
export class SignupNewComponent implements OnInit {

  public signupNewForm !:FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupNewForm = this.formBuilder.group({
      fullName : [''],
      mobileNumber : [''],
      email : [''],
      password : ['']
    })
  }

  signup(){
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupNewForm.value)
    .subscribe(data=>{
      alert("Signup Successfully");
      this.signupNewForm.reset();
      this.router.navigate(['login-new']);
    },
    err=>{
      alert("Something Went Wrong");
    })
  }

}
