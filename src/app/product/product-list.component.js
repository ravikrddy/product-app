"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var interfaces_1 = require('../interfaces');
var ProductListComponent = (function () {
    function ProductListComponent(productService) {
        this.products = [];
        this.year = "";
        this.productService = productService;
    }
    ProductListComponent.prototype.trackByProduct = function (index, product) {
        return product.id;
    };
    ProductListComponent.prototype.fetchProducts = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    ProductListComponent.prototype.ngOnInit = function () {
        //let _this=this;
        this.fetchProducts();
        /*.subscribe(function(products:any[]){
            _this.products=products;
        })*/
        /*.subscribe((products:any[])=>{
            this.products=products;
        })*/
    };
    //listener
    ProductListComponent.prototype.likesChangedHandler = function (likes) {
        console.log("likes", likes);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-list',
            templateUrl: 'product-list.component.html'
        }), 
        __metadata('design:paramtypes', [interfaces_1.ProductService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map