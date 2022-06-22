import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   constructor(private http: HttpClient, private router: Router ) { }

    getProducts() {
    return this.http.get<any>("http://localhost:4000/api/products");
    }
   createProducts(product:any) {
    return this.http.post<any>("http://localhost:4000/api/products",product);
    }
    updateProduct(product:any){
      return this.http.put<any>('http://localhost:4000/api/products',product);
    }
    deleteProduct(id:any){
      return this.http.delete<any>('http://localhost:4000/api/products/soft/'+id);
    }
    trushedProduct(){
    return this.http.get<any>("http://localhost:4000/api/products");

    }
}
