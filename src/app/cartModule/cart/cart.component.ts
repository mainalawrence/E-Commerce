import { Component, OnInit } from '@angular/core';
import {IPayPalConfig,ICreateOrderRequest   } from 'ngx-paypal';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public payPalConfig ? : IPayPalConfig;
 showSuccess:any;
  constructor(public cartservice:CartService) { }

  ngOnInit(): void {
    
  }
}
