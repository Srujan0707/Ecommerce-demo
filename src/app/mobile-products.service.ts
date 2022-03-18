import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MobileProductsService {

  constructor(private dataBase:AngularFirestore) { }

  getMobileProducts(){
    return this.dataBase.collection('Mobiles').valueChanges();
  }
}
