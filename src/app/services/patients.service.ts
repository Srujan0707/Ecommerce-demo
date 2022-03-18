import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
apiUrl="https://try.smilecdr.com/baseR4/Patient";
apiUrl2 = "https://api.publicapis.org/entries";

  constructor(private http:HttpClient) { }
  loader = new BehaviorSubject<Boolean>(true);

  getPatientDetails():Observable<any>{
return this.http.get(this.apiUrl);
  }

  getEntires():Observable<any>{
    return this.http.get(this.apiUrl2);
  }
}
