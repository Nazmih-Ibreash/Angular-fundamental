
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'upvote',
    styleUrls: ['./upvote.component.css'],
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="votingWidget">
                <div class="votingButton">
                    <i class="glyphicon glyphicon-heart" [style.color]="iconColor" ></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `
})

export class UpvoteComponent implements OnInit {
    @Input() count!: number
    @Input() set voted(val: any) {
        this.iconColor=val ? 'red' : 'white'
    }
    @Output() vote: EventEmitter<any> = new EventEmitter()
    public iconColor!: string

    constructor() { }

    ngOnInit() { }

    onClick(){
        this.vote.emit({})
    }
} 