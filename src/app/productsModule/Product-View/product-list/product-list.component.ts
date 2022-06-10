import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any[]=[1,2,3,4,5,6,67,7,8,9,9,70,32,22]
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

  }

}
