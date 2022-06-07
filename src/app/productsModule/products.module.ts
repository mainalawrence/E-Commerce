import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { UpdateProductsComponent } from './Components/update-products/update-products.component';
import { ProductListComponent } from './Components/Product-View/product-list/product-list.component';
import { ProductDetailsComponent } from './Components/Product-View/product-details/product-details.component';
import { ProductPhotoSlideComponent } from './Components/Product-View/product-photo-slide/product-photo-slide.component';
import { ProductComponent } from './Components/Product-View/product/product.component';
import { ProductFilterComponent } from './ProductUtility/product-filter/product-filter.component';
import { FilterPipe } from './ProductUtility/filter.pipe';



@NgModule({
  declarations: [
    NewProductComponent,
    UpdateProductsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductPhotoSlideComponent,
    ProductComponent,
    ProductFilterComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
