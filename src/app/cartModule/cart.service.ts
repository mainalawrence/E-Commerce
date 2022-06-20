import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Total:number=0;
  products:any[]=[ 
    {id:1,image:"https://techbuyz.co.ke/wp-content/uploads/2021/07/HP-ProBook-440-G5-1.jpg",barnd:"sumsang",price:1200,quantity:1,subtotal:1200},
    {id:2,image:"https://techbuyz.co.ke/wp-content/uploads/2021/07/HP-ProBook-440-G5-1.jpg",barnd:"sumsang",price:1200,quantity:1,subtotal:1200},
    {id:3,image:"https://techbuyz.co.ke/wp-content/uploads/2021/07/HP-ProBook-440-G5-1.jpg",barnd:"sumsang",price:1200,quantity:1,subtotal:1200},
    {id:4,image:"https://techbuyz.co.ke/wp-content/uploads/2021/07/HP-ProBook-440-G5-1.jpg",barnd:"sumsang",price:1200,quantity:1,subtotal:1200},
    {id:5,image:"https://techbuyz.co.ke/wp-content/uploads/2021/07/HP-ProBook-440-G5-1.jpg",barnd:"sumsang",price:1200,quantity:1,subtotal:1200},
    {id:6,image:"https://techbuyz.co.ke/wp-content/uploads/2021/07/HP-ProBook-440-G5-1.jpg",barnd:"sumsang",price:1200,quantity:1,subtotal:1200},
    {id:7,image:"https://techbuyz.co.ke/wp-content/uploads/2021/07/HP-ProBook-440-G5-1.jpg",barnd:"sumsang",price:1200,quantity:1,subtotal:1200},
    {id:8,image:"https://techbuyz.co.ke/wp-content/uploads/2021/07/HP-ProBook-440-G5-1.jpg",barnd:"sumsang",price:1200,quantity:1,subtotal:1200},
    {id:9,image:"https://techbuyz.co.ke/wp-content/uploads/2021/07/HP-ProBook-440-G5-1.jpg",barnd:"sumsang",price:1200,quantity:1,subtotal:1200}
]



  constructor() {
      this.TotolPrice()
   }

   productCount(){
     return this.products.length;
   }
  addProductCart(product:any){
     this.TotolPrice()
    this.products.push(product);
  }
   removeProductCart(id:any){
    this.products=this.products.filter(product=>{
       if(product.id !==id){
        return product
      }
    })
    this.TotolPrice();
  }
  reduceProductQuantityCart(id:number){
    this.products.map(product=>{
    if(id==product.id){
        if(product.quantity>1){
        product.quantity--;
        product.subtotal=product.price*product.quantity
      }
    }
    })
    this.TotolPrice();
  }
    addProductQuantityCart(id:number){
    this.products.map(product=>{
        if(id===product.id){
          product.quantity++;
          product.subtotal=product.price*product.quantity
        }
     
    })
    this.TotolPrice();
  }

  TotolPrice(){
    this.Total=0;
    this.products.map(product=>{
     this.Total+=product.subtotal;
    })
  }



}
