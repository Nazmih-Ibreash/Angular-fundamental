import { Component, ElementRef, Inject, Input, ViewChild } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";


@Component({
    selector: 'simple-modal',
    template: `
    <div id={{elementId}} class="modal " #modalcontainer tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"> <span>&times;</span></button>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body" (click)="closeModal()">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
    `,

    styles: [`
    .modal-body{ height: 450px; overflow-y: scroll }
    `],

})

export class SimpleModelComponent {
    @Input() title!: string
    @Input() elementId!: string
    @ViewChild('modalcontainer')
    contaiterEl!: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $: any) { }

    closeModal() {
        this.$(this.contaiterEl.nativeElement).modal('hide')
    }
}