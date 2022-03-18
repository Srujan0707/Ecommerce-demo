import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFireStore:AngularFirestore) { }

  addNewUser(id:any,name:any,password:any, mobileNumber:number){
    return this.angularFireStore.doc('user/' + id).set({name, password, mobileNumber});
  }
}
