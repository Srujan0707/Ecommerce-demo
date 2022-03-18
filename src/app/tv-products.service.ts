import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TvProductsService {

  constructor(private dataBase:AngularFirestore) { }

  getTVProducts(){
    return this.dataBase.collection('Tvs').valueChanges();
  }
}
