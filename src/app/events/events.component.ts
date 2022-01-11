import { ToastrService } from './../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from "@angular/core";
//import { toBase64String } from '@angular/compiler/src/output/source_map';

declare let toastr:any;

@Component({
  selector: 'events-list',
  template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <div class="well hoverwell thumbnail"><h4>Hello world</h4></div>
            <div class="row">
              <div *ngFor="let event of events" class="col-md-5">
                <events-thumbnail (click)="handleThumnailClick(event.name)"
                    [event]="event"></events-thumbnail>
              </div>
            </div>
        </div>
        `
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService, private toastr:ToastrService) {
  }
  
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
  handleThumnailClick(eventName:any) {
    this.toastr.success(eventName)
  }
}