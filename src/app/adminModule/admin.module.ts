import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductFormComponent } from './component/Products/product-form/product-form.component';
import { ProductviewComponent } from './component/Products/productview/productview.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './component/menu/menu.component';
import { UsersTableComponent } from './component/Users/users-table/users-table.component';
import { UserComponent } from './component/Users/user/user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductFormComponent,
    ProductviewComponent,
    MenuComponent,
    UsersTableComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forChild([{
       path:'',
      children:[
        {path:'',component:DashboardComponent,children:[
        {path:'',component:ProductviewComponent},
        {path:'products',component:ProductFormComponent},
        {path:'customers',component:ProductviewComponent},
        {path:'charts',component:DashboardComponent}
        ]},
     

      ]
      
    }]),
    CommonModule,
    ReactiveFormsModule,
   
  ]
  ,
  bootstrap:[DashboardComponent]
})
export class AdminModule { }
