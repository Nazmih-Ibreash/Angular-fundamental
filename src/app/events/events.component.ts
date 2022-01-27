import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { TOASTER_TOKEN } from './../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from "@angular/core";

//import { toBase64String } from '@angular/compiler/src/output/source_map';

declare let toastr:any;

@Component({
 
  template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <div class="well hoverwell thumbnail"><h4>Hello world</h4></div>
            <div class="row">
              <div *ngFor="let event of events" class="col-md-5">
                <events-thumbnail [event]="event"></events-thumbnail>
              </div>
            </div>
        </div>
        `
})
export class EventsListComponent implements OnInit {
  events: IEvent[]=[] ;

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.events=this.route.snapshot.data['events']
  }
 
}