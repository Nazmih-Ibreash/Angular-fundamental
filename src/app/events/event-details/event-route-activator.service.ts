import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Injectable } from "@angular/core";
import { EventService } from '../shared/event.service';


@Injectable()
export class EventRouteActivetor implements CanActivate{
    constructor(private eventService: EventService, private router:Router) { }
    
    canActivate(route:ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])
        if (!eventExists) {
            this.router.navigate(['/404'])
        }
        return eventExists;
    }
    
}