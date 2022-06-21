import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ProductFilterComponent } from 'src/app/productsModule/product-filter/product-filter.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private offcanvasService: NgbOffcanvas,public router:Router) {}


  ngOnInit(): void {
  }
  open(){
const offcanvasRef = this.offcanvasService.open(ProductFilterComponent);
  }
  checkIfAdmin(){
    if(this.router.url ==='/admin'){
      return false;
    }
   return true;
  }
}
