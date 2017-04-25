import { Component, OnInit } from '@angular/core';
import {ProductService} from '../interfaces';
import {CartStorageService}from "../cart/cart.services";

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit {
    products:any[]=[];

    year:any="";

    //productService:ProductService;
    constructor(private productService:ProductService,private cartStorageService:CartStorageService) {
        //this.productService=productService;
     }

     addToCart(product:any){
         this.cartStorageService.addProduct(product);
     }

     trackByProduct(index:number,product:any){
return product.id;
     }

     fetchProducts(){
       this.productService.getProducts().subscribe((products:any[])=>{
            this.products=products;
        })  
     }

    ngOnInit() {
        //let _this=this;
        this.fetchProducts();
        
        /*.subscribe(function(products:any[]){
            _this.products=products;
        })*/
        /*.subscribe((products:any[])=>{
            this.products=products;
        })*/
     }
//listener
     likesChangedHandler(likes:number){
         console.log("likes",likes);
     }
}