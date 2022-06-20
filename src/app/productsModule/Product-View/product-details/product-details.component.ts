import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProductDetailsComponent implements OnInit {

     images = ["https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/42/071213/7.jpg?7557"]
  constructor(private config: NgbCarouselConfig) { 
        config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
