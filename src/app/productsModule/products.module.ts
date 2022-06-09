import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './Product-View/product-list/product-list.component';
import { ProductDetailsComponent } from './Product-View/product-details/product-details.component';
import { ProductPhotoSlideComponent } from './Product-View/product-photo-slide/product-photo-slide.component';
import { ProductComponent } from './Product-View/product/product.component';
import { ProductFilterComponent } from './ProductUtility/product-filter/product-filter.component';
import { FilterPipe } from './ProductUtility/filter.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductPhotoSlideComponent,
    ProductComponent,
    ProductFilterComponent,
    FilterPipe
  ],
  imports:[
    RouterModule.forChild([{
      path:'',component:ProductListComponent
    }]
    ),
    CommonModule
  ]
})

export class ProductsModule { }
