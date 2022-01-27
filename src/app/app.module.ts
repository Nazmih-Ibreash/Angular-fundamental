import { EventRouteActivetor } from './events/event-details/event-route-activator.service';
import { CreateEventComponent } from './events/create-event.component';
import { TOASTER_TOKEN, Toastr, JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { EventService } from './events/shared/event.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsListComponent } from './events/events.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './../routes';
import { Error404Component } from './errors/404.component';
import { EventResolver } from './events/events-resolver.service';
import { AuthService } from './events/user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { DurationPipe } from './events/shared/duration.pipe';
//import * as $ from 'jquery'

declare let toastr: Toastr;
let jQuery: any


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
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    { provide: TOASTER_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivetor,
    EventResolver,
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