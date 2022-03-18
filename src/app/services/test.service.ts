import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestService {

  apiURL = "https://randomuser.me/api/";
  this: any;

  constructor( private http:HttpClient) {  }

getApiDetails(){
  return this.http.get(this.apiURL);
}

}
