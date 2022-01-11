import { ToastrService } from './common/toastr.service';
import { EventService } from './events/shared/event.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsListComponent } from './events/events.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [EventService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
