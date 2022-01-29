
import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core'
import { JQ_TOKEN } from "./jQuery.service";

@Component({
    selector: 'simple-modal',
    template: `
        <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                        <h4 class="modal-title" (click)="closeModal()">{{title}} </h4>
                    </div>
                    <div class="modal-body">
                        <ng-content select="selector"></ng-content>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .modal-body { height: 250px; overflow-y: scrol}
    `]
})
export class SimpleModalComponent {
    @Input() title: string
    @Input() elementId: string
    @ViewChild('modalcontainer') containerEl: ElementRef

    constructor(@Inject(JQ_TOKEN) private $: any) { }

    closeModal() {
        this.$(this.containerEl.nativeElement).modal('hide')
    }
}