import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalAPIService {

  constructor(private http:HttpClient) { }
  

  postEmployee(data:any):Observable<any>{
return this.http.post<any>("http://localhost:3000/posts", data)
.pipe(map((result:any)=>{
  return result;
}))
  }

  getEmployee(data:any):Observable<any>{
return this.http.get<any>("http://localhost:3000/posts", data)
.pipe(map((result:any)=>{
  return result;
}))
  }

updateEmployee(data:any, id:number):Observable<any>{
return this.http.put<any>("http://localhost:3000/posts/"+id, data)
.pipe(map((result:any)=>{
  return result;
}))
}

deleteEmployee(id:number):Observable<any>{
return this.http.delete<any>("http://localhost:3000/posts/" + id)
.pipe(map((result:any)=>{
  return result;
}))
}



}
