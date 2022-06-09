import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from './HeaderFooter/Error.Component/error.component'

const routes: Routes = [
  {
  path:'',
  loadChildren: () => import('./productsModule/products.module').then(m => m.ProductsModule)
  },
  {
    path:'cart',
    loadChildren: () => import('./cartModule/cart.module').then(m => m.CartModule)
  },
  {
    path:'admin',
    loadChildren: () => import('./adminModule/admin.module').then(m => m.AdminModule)
  },
  {
path:'**',
component:ErrorComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
