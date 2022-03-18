import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authentication:AuthenticationService) { }
  isUser:Boolean = false;
  isOpen :boolean = false;
  
  //toogleNavBar Function Helps us show the Hamburger Open Functionality in the responsive Mode. //
  toogleNavBar(){
    this.isOpen = ! this.isOpen;
  }
  
  ngOnInit(){
    this.authentication.user.subscribe(user => 
      {
        if(user)
                  { 
                   this.isUser = true;
                   this.authentication.userId = user.uid;
                  //  console.log(this.isUser);
                  }
        else
                  {
                  this.isUser = false;
                  this.authentication.userId = '';
                 // console.log(this.isUser)
                  }
      });
  }

  userLogOut(){
    this.authentication.logOut();
  }
  
 

}
