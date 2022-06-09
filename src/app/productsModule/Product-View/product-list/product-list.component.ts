import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any[]=[1,2,3,4,5,6,67,7,8,9,9,70,3,2]
  constructor() { }

  ngOnInit(): void {
  }

}
