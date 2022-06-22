import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductstateService {

  constructor(private http: HttpClient, private router: Router ) { }

    getProducts() {
    return this.http.get<any>("http://localhost:4000/api/products");
  }
}
