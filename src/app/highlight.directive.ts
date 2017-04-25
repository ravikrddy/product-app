import { Directive, OnInit, 
                    ElementRef, Renderer, HostListener, Input} from '@angular/core';

@Directive({ 
    selector: '[highlight]' 
})
export class HighlightDirective implements OnInit {
    @Input("highlight")
    highlightColor:string="green";

    constructor(private elementRef:ElementRef,
            private renderer: Renderer) {
        console.log("highlight created");
     }

    ngOnInit() {
        console.log("set color");
        //this.setColor("green");
    }

    setColor(color: string) {
        this.renderer.setElementStyle (
                this.elementRef.nativeElement,
                "background",
                color
        )
    }
    @HostListener("mouseenter")
    mouseenter(){
        this.setColor("this.hightlightColor");
    }

    @HostListener("mouseleave")
    mouseleave(){
        //this.setColor("");
    }
}