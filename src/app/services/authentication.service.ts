import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import * as firebase from 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
user: Observable<firebase.User | null>;
userId: string = '';
userName :string ='';

   constructor(private angularFireAuth : AngularFireAuth) { 
    this.user = angularFireAuth.user;  
  }

  signUp(email:string, password:string, mobileNumber:number){
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }  

  login(email:string, password:string){
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

   logOut(){
    return this.angularFireAuth.signOut();
  }

}
