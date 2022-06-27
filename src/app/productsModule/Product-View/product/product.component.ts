import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css',]
})
export class ProductComponent implements OnInit {
  url:string=''
  @Input() product:any={};
  images:String[]=[];
  constructor() { }

  ngOnInit(): void {
    
    this.images=this.product.images.split(',')
    this.url="http://localhost:4000/Product/"+this.images[0]
    console.log(this.url);
    
  }

}
