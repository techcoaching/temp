import { Input, ElementRef, Directive, AfterViewInit } from "@angular/core";
@Directive({
    selector: "[redColor]"
})
export class RedColor implements AfterViewInit {
    @Input("redColor") color: string;
    @Input() defaultColor: string = "";
    private ui: ElementRef;
    constructor(ui: ElementRef) {
        this.ui = ui;
    }
    ngAfterViewInit() {
        this.ui.nativeElement.style.backgroundColor = this.defaultColor == "" ? this.color : this.defaultColor;
    }
} 