import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductstateService } from '../../Services/productstate.service';
import { CartService } from 'src/app/cartModule/cart.service';

interface ProductInterface{
brand?:string,
category?: string | null,
deleted?: string | null,
description?:string ,
features?:string,
id?:string ,
images?:string ,
name?:string ,
price?: number
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProductDetailsComponent implements OnInit {
  id:string='';
  Products:any;
  images:string[] = []
  Features:string[]=[];
  specifications:string[]=[];

  constructor(private config: NgbCarouselConfig,
    public cartServices:CartService,
    private router:ActivatedRoute,
    private productService:ProductstateService) { 
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  currentRate:number=5;
  ngOnInit(): void {
    this.router.params.subscribe((path=>{
    this.id=path['id']
    }))
    this.Products=this.productService.Products.filter((product:any)=>{
      if(product.id==this.id){
        product.quantity=1;
        product.subtotal=product.price;
        console.log(product); 
         this.images= product.images.split(',').map((image:any)=>{
          return "http://localhost:4000/Product/"+image
         })
         this.specifications=product.specification.split(',');
         this.Features=product.features.split(',');
        return product;
      }
      else return;
    })
    console.log(this.Products);
     
  }
  addProductoCart(){
    console.log(this.Products);
    
    this.cartServices.addProductCart(this.Products)
  }

}
