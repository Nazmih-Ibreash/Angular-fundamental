import { EventRouteActivetor } from './events/event-details/event-route-activator.service';
import { CreateEventComponent } from './events/create-event.component';
import { ToastrService } from './common/toastr.service';
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



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivetor,
    EventResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent ){
  if (component.isDirty) {
    return window.confirm('you have not saved this event, do you really want to cancel?')
  }
  return true;
}