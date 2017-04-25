import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product-list.component";
import {ProductEditComponent} from "./product-edit.component";
import {ProductHomeComponent} from "./product-home.component";
import { EditGuard, SaveAlertGuard } from "./product.guards";
import {ProductSearchComponent}from "./product-search.component";

const routes:Routes=[
    {
path:'products',
    component:ProductHomeComponent,
    children:[
{
    path:'list',
    component:ProductListComponent
},
{
    path:'edit/:id',
    component:ProductEditComponent,
    canActivate:[EditGuard],
    canDeactivate:[SaveAlertGuard]
},
{
    path:"create",
    component:ProductEditComponent
},
{
    path:"search",
    component:ProductSearchComponent
}
    ]
    },
    
]

export const components:any[]=[
    ProductEditComponent,
    ProductListComponent,
    ProductHomeComponent,
    ProductSearchComponent
]

import {ModuleWithProviders} from "@angular/core";
export const routingModule:ModuleWithProviders=RouterModule.forRoot(routes);