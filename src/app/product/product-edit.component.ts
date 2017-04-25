import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router}from "@angular/router";
import {ProductService}from "../interfaces";
import {ProductWebService}from "./product.service";
import {NgForm}from "@angular/forms";

@Component({
    moduleId: module.id,
    templateUrl: 'product-edit.component.html',
    styles:[
        'input.ng-dirty{color:red}'
    ],

    styleUrls:[
        'product-edit.component.css'
    ],

    providers:[{
        provide:ProductService,
        useClass:ProductWebService
    }]
})

export class ProductEditComponent implements OnInit {
    product:any={};
    brands:any[]=[];

@ViewChild("productForm")
form:NgForm;

    constructor(private route:ActivatedRoute,private productService:ProductService,private router:Router) { }

    ngOnInit() {
        let id=this.route.snapshot.params["id"];
        console.log("id",id);
if(id){
        this.productService.getProduct(id).then((product:any)=>{
            this.product=product;
        })
        }

        this.productService.getBrands().then((brands:any[])=>{
            this.brands=brands;
        })

        this.form.valueChanges.subscribe((values)=>{
            console.log("changes",values);
        })
     }
     saveProduct(event: Event){

         if(!this.form.dirty){
             alert("No changes found");
             return;
         }         

         event.preventDefault();

         this.productService.saveProduct(this.product).then((savedProduct:any)=>{
             this.product=savedProduct;
             //reset form state
             this.form.reset();

             this.router.navigate(["/products/list"]);
         })
     }
}