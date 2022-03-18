import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  list = ["LET'S LOGIN", "ENTER DETAILS", "EMAIL", "PASSWORD"]

  constructor(
    private authentication:AuthenticationService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  dataCaptureOfLoginForm( loginForm: any ){
  console.log(loginForm.value.emailAddress);  //testing purpose
  console.log(loginForm.value.loginPassword); //testing purpose
  this.authentication.login(loginForm.value.emailAddress, loginForm.value.loginPassword)
  .then (data => this.router.navigate(['/']))
  .catch (error => console.log(error))
  this.router.navigate(['/']);
  }
}
