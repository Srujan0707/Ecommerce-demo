import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private angularFireStore:AngularFirestore, 
    private authentication:AuthenticationService) 
    {}

  addToCart(MobileProducts:any){
return this.angularFireStore.collection(`user/${this.authentication.userId}/cart`).add(MobileProducts);
  }
  
  getCart(){
return this.angularFireStore.collection(`user/${this.authentication.userId}/cart`).snapshotChanges();
  }
  

  deleteProductFromCart(id:any){
    return this.angularFireStore.doc(`user/${this.authentication.userId}/cart/${id}`).delete();
  }
  updateProductFromCart(id:any, items:any){
  return this.angularFireStore.doc(`user/${this.authentication.userId}/cart/${id}`).update({items});
  }

}
