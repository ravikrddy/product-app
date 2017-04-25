import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from "jquery";
//declare var $:JQueryStatic;

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(private elementRef:ElementRef) {
        console.log("home");
     }

    ngOnInit() {
        console.log("home init");
        //BAD approach
        //$("p").text("from jquery")
        $(this.elementRef.nativeElement).find("p").text("from jquery");
     }
}