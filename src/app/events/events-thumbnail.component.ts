import { IEvent } from './shared/event.model';
import { Component, EventEmitter, Input, Output } from "@angular/core";

type style={
    color: string;
    'font-weight': string;
};

@Component({
    selector: 'events-thumbnail',
    template: `
           
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name | uppercase}} </h2>
            <div>Date: {{event?.date | date: 'shortDate'}}</div>
            <div [ngStyle]= "getStartTimeStyle()"
                [ngSwitch]="event?.time" >
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'"> | Early Start</span>
                <span *ngSwitchCase="'10:00 am'"> | Late Start</span>
                <span *ngSwitchDefault> | Normal Start</span>
            </div>
            <div>Price: {{event?.price | currency}}</div>
            <div *ngIf ="event?.location">
                <span>Location: {{event.location?.address}} </span>
                <span class="pad-left">{{event.location?.city}}, {{event.location?.country}} </span>
            </div>
            <div [hidden]="!event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
        </div>
        `,
    styles: [`
        .thumbnail {min-height:210px}
        .pad-left {margin-left: 10px}
        .well div {color: #bbb;}
    `]

})
export class EventThumbnailComponent {
    @Input()
    event!: IEvent;

    getStartTimeStyle(): style {
        if (this.event && this.event.time === '8:00 am' || this.event.time === '9:00 am')
            return { color: '#003300', 'font-weight': 'bolder' };
        return { color: 'red', "font-weight": '' }
    }

    logFoo() {
        console.log('foo');
    }
}
