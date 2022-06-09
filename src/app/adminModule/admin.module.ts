import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ProductviewComponent } from './component/productview/productview.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductFormComponent,
    ProductviewComponent
  ],
  imports: [
    RouterModule.forChild([{
      path:'',component:DashboardComponent
    }]),
    CommonModule
  ]
})
export class AdminModule { }
