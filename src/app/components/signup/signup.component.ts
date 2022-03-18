import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  list = ['GET STARTED WITH FREE ACCOUNT', '500+ HAPPY CUSTOMERS']
  errorMessage :string = '';
  successMessage:string = '';


  constructor(
    private router: Router, 
    private authentication:AuthenticationService, 
    private user:UserService ) 
    { } 

  ngOnInit(): void {}

  dataCapture(signupForm: any){
    console.log(signupForm.value.signupname); //testing purpose
    console.log(signupForm.value.signupemail); //testing purpose
    console.log(signupForm.value.signuppassword); //testing purpose
    this.authentication.signUp(
      signupForm.value.signupemail, 
      signupForm.value.signuppassword, 
      signupForm.value.signupnumber)
          .then(data => 
            {
                  this.successMessage = 'Account is Successfully Created.'
                  this.user.addNewUser(
                    data.user?.uid, signupForm.value.signupemail, 
                    signupForm.value.signuppassword, 
                    signupForm.value.signupnumber);
                  this.router.navigate(['/login']);
            })
           .catch(error => this.errorMessage = error);
  }
  

  reDirectToLogin(){
    this.router.navigate(['/login']);
  }
  
   
}
