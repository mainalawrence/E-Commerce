import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductstateService {

  constructor(private http: HttpClient, private router: Router ) { }

  getProducts(){
    return this.http.get<any>("http://localhost:4000/api/Products");
  }
   getTrushProducts(){
    return this.http.get<any>("http://localhost:4000/api/Products");
  }

   UpdateProducts(){
    return this.http.get<any>("http://localhost:4000/api/Products");
  } 

  trushProducts(id:string){
    return this.http.delete<any>("http://localhost:4000/api/Products/"+id);
  }
  deleteProducts(id:string){
    return this.http.delete<any>("http://localhost:4000/api/Products/"+id);
  }
}
