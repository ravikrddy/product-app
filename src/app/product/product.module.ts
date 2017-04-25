import {NgModule} from "@angular/core";
import {CommonModule}from "@angular/common"
import {HttpModule}from "@angular/http"
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {ProductListComponent}from "./product-list.component"
import {ProductWebService} from "./product.service"
import {ProductService}from "../interfaces"
import {ProductLikeWidgetComponent} from "./product-like.component";
import {ByYearPipe} from "./product.pipes"
import {routingModule, components} from "./product.routing"
import {EditGuard,SaveAlertGuard}from "./product.guards";

@NgModule({
    imports:[
CommonModule,
HttpModule,
FormsModule,
ReactiveFormsModule,
routingModule
    ],
declarations:[
    components,
    ProductLikeWidgetComponent,
    ByYearPipe
],
exports:[
ProductListComponent
],
providers:[{
    provide:ProductService,
    useClass:ProductWebService
},
EditGuard,
SaveAlertGuard
]
})
export class ProductModule{

}