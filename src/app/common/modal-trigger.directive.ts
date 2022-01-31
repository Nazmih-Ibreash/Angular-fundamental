import {Directive, ElementRef, Inject, Input, OnInit } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";
import * as $ from 'jquery';

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('modal-trigger') modalId!:string

    constructor(ref: ElementRef ,@Inject(JQ_TOKEN) private $:any  ) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', (e: any) =>{
            this.$(`#${this.modalId}`).modal({})
        })
    }

}