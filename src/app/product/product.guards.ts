import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, CanDeactivate } from '@angular/router';

@Injectable()
export class EditGuard implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return window.confirm("do you want to edit?");
    }
}

import {ProductEditComponent}from "./product-edit.component"
@Injectable()
export class SaveAlertGuard implements CanDeactivate<ProductEditComponent>{

canDeactivate(editComponent:ProductEditComponent){
    if(!editComponent.form.dirty){
        return true;
    }
    return window.confirm("want to leave the page?");
}
}