import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from './HeaderFooter/Error.Component/error.component'

const routes: Routes = [
  {
  path:'products',
  loadChildren: () => import('./productsModule/products.module').then(m => m.ProductsModule)
  },
  {
    path:'',redirectTo:'/products' ,pathMatch:'full'
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
    path:'auth',
    loadChildren: () => import('./authenticationModule/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path:'**',component:ErrorComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
