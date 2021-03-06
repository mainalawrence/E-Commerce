import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductListComponent } from './Product-View/product-list/product-list.component';
import { ProductDetailsComponent } from './Product-View/product-details/product-details.component';
import { ProductPhotoSlideComponent } from './Product-View/product-photo-slide/product-photo-slide.component';
import { ProductComponent } from './Product-View/product/product.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { FilterPipe } from './ProductUtility/filter.pipe';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from '../HeaderFooter/Error.Component/error.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductPhotoSlideComponent,
    ProductComponent,
    ProductFilterComponent,
    FilterPipe,
    PaginationComponent
  ],
  imports:[
    RouterModule.forChild([{
      path:'',
      children:[
        {path:'',component:ProductListComponent},
        {path:'filter', component:ProductFilterComponent},
        {path:':id',component:ProductDetailsComponent},
        {path:'**',component:ErrorComponent}
      ]
    }]
    ),
    CommonModule,
    NgbModule
    
    
  ],
  bootstrap:[ProductDetailsComponent]
})

export class ProductsModule { }
