import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor(private http:HttpClient) { }


  getproducts(){
    return this.http.get<any>("https://fakestoreapi.com/products/")
    .pipe(map((data:any) =>{
        return data;
    }))
  }
}
