import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductstateService } from '../../Services/productstate.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Products:any[]=[]
  constructor(private route:ActivatedRoute,private productService:ProductstateService) { }

  ngOnInit(): void {
   this.productService.getProducts().subscribe(res=>{
  this.Products=res[0];
  this.productService.Products=res[0];
  })
  
}

}
