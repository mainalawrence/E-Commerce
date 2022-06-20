import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ProductviewComponent } from './component/productview/productview.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './component/menu/menu.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductFormComponent,
    ProductviewComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forChild([{
       path:'',
      children:[
        {path:'',component:DashboardComponent},
        {path:'products',component:ProductFormComponent},
        {path:'customers',component:DashboardComponent},
        {path:'charts',component:DashboardComponent}

      ]
      
    }]),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
