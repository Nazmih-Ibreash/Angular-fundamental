import { EventResolver } from './events/event-resolver.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRouteSnapshot } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { SimpleModelComponent } from './common/simple-modal.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { CreateEventComponent } from './events/create-event.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQ_TOKEN } from "./common/jQuery.service";
import { EventService } from './events/shared/event.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsListComponent } from './events/events.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { UpvoteComponent } from "./events/event-details/upvote.component";
import { appRoutes } from './../routes';
import { Error404Component } from './errors/404.component';
import { EventListResolver } from './events/events-resolver.service';
import { AuthService } from './events/user/auth.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { DurationPipe } from './events/shared/duration.pipe';
import * as $ from 'jquery';
import { VoterService } from './events/event-details/voter.service';
import { LocationValidator } from './events/location-validator.directive';


declare let toastr: Toastr;
declare let jQuery:any

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModelComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventListResolver,
    EventResolver,
    VoterService,
    AuthService,
  
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('you have not saved this event, do you really want to cancel?')
  }
  return true;
}