import { Directive, ElementRef, Inject, OnInit } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private element: HTMLElement

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.element = ref.nativeElement
    }

    ngOnInit() {
        this.element.addEventListener('click', e => {
            this.$('simple-modal').modal({})
        })

    }

}