import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ProductviewComponent } from './component/productview/productview.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductFormComponent,
    ProductviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
