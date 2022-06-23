import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductFormComponent } from './component/Products/product-form/product-form.component';
import { ProductviewComponent } from './component/Products/productview/productview.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './component/menu/menu.component';
import { UsersTableComponent } from './component/Users/users-table/users-table.component';
import { UserComponent } from './component/Users/user/user.component';
import { OrderListComponent } from './component/Orders/order-list/order-list.component';
import { OrderComponent } from './component/Orders/order/order.component';
import { ProductListComponent } from './component/Products/product-list/product-list.component';
import { UpdateUsersComponent } from './component/Users/update-users/update-users.component';
import { TrushUsersComponent } from './component/Users/trush-users/trush-users.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductFormComponent,
    ProductviewComponent,
    MenuComponent,
    UsersTableComponent,
    UserComponent,
    OrderListComponent,
    OrderComponent,
    ProductListComponent,
    UpdateUsersComponent,
    TrushUsersComponent
  ],
  imports: [
    RouterModule.forChild([{
       path:'',
      children:[
        {path:'',component:DashboardComponent,
        children:[
          {path:'',component:ProductviewComponent},
          {path:'products',
           children:[
             {path:'',component:ProductFormComponent}
            ,{path:'view-product',component:ProductListComponent},{path:'add-product',component:ProductFormComponent}]},

            // products children route
          {path:'users', children:[ 
            {path:'',component:UsersTableComponent},
            {path:'trush',component:TrushUsersComponent}
          
          ]},
            // order children route
          {path:'orders',children:[{path:'',component:OrderListComponent}]}
        ]},
      ]
      
    }]),
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
   
  ]
  ,
  bootstrap:[DashboardComponent,MenuComponent,UserComponent]
})
export class AdminModule { }
