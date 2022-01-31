import { EventResolver } from './app/events/event-resolver.service';
import { EventListResolver } from './app/events/events-resolver.service';
import { Error404Component } from './app/errors/404.component';
import { Routes } from "@angular/router"
import { EventsListComponent } from './app/events/events.component'
import { EventDetailsComponent } from './app/events/event-details/event-details.component'
import { CreateEventComponent } from "./app/events/create-event.component"
import { CreateSessionComponent } from './app/events/event-details/create-session.component';


export const appRoutes: Routes = [
    { path: 'events/new' , component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent , resolve: {events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {
        path: 'user',
        loadChildren: () => import ('./app/events/user/user.module')   .then(m => m.UserModule)
    }
]