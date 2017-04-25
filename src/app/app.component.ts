import {Component} from "@angular/core";
@Component({
    moduleId:module.id,
selector:'product-app',//html element
templateUrl:"app.component.html"
})
export class AppComponent{
    title:string="Product app";

    aboutTitle:string="About from App";

    getTitle(title:string){
        return 'About from app'
    }

}