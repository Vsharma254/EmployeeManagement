import { Directive, HostListener, HostBinding, ElementRef, Renderer, OnInit } from "@angular/core";
@Directive({
    selector: "[set-IsActive]"
})
export class SetActiveInactiveDirective implements OnInit {
    constructor(public ele: ElementRef, public renderer: Renderer) {

    }
    ngOnInit() {
        this.renderer.setElementStyle(this.ele.nativeElement, "background-color", "blue");
        this.renderer.setElementStyle(this.ele.nativeElement, "color", "blue");
    }
}