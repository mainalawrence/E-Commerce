import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProductDetailsComponent implements OnInit {

     images = ["https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/42/071213/7.jpg?7557","https://www.stewancomputers.co.ke/wp-content/uploads/2022/03/Hp-probook-440-G4.jpg","https://www.stewancomputers.co.ke/wp-content/uploads/2022/03/Hp-probook-440-G4.jpg"]
  constructor(private config: NgbCarouselConfig) { 
        config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
