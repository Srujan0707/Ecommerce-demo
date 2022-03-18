import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrasticeproductsService {

public apiUrl ="http://my-json-server.typicode.com/TeluguTechSteps/Products/Info";
public apiUrl2="https://try.smilecdr.com/baseR4/Patient";

  constructor(private http:HttpClient) { }

//Getting the getmethod from the API 
  getProductDetails(){
    return this.http.get(this.apiUrl);
  }

  detailsOfApi(){
    //console.log('detailsOfApi');
    return this.http.get(this.apiUrl2);
  }
  //Getting the getmethod from the API 
}
