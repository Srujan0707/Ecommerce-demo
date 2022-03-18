import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class LaptopProductsService {

  constructor(private dataBase:AngularFirestore) { }

  getLaptopProducts(){
    return this.dataBase.collection('Laptops').valueChanges();
  }
}
