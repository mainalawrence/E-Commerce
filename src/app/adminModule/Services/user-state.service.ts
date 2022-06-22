import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  constructor(private http: HttpClient, private router: Router) {}

  getUsers(){
    return this.http.get<any>("http://localhost:4000/api/users");
  }
   getTrushUsers(){
    return this.http.get<any>("http://localhost:4000/api/users");
  }

   UpdateUsers(){
    return this.http.get<any>("http://localhost:4000/api/users");
  } 

  trushUsers(id:string){
    return this.http.delete<any>("http://localhost:4000/api/users/"+id);
  }
  deleteUsers(id:string){
    return this.http.delete<any>("http://localhost:4000/api/users/"+id);
  }



}
