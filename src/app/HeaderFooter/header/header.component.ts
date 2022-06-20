import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-offcanvas-content',
  template: `
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Filter Products</h5>
      <button type="button" class="btn-close text-reset" aria-label="Close" (click)="activeOffcanvas.dismiss('Cross click')"></button>
    </div>
    <div class="offcanvas-body">
      <div>
        hellow
      </div>
      <button type="button" class="btn btn-outline-dark" (click)="activeOffcanvas.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdOffcanvasContent {
  path=''
  constructor(public activeOffcanvas: NgbActiveOffcanvas) {
    
  }

}


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
const offcanvasRef = this.offcanvasService.open(NgbdOffcanvasContent);
  }
  checkIfAdmin(){
    if(this.router.url ==='/admin'){
      return false;
    }
   return true;
  }
}
