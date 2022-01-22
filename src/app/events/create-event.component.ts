import { Component } from "@angular/core";
import { Form, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { EventService } from "./shared/event.service";

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em { float: right; color: #E05C65;padding-left: 10px;} 
    .error input {bachground-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color: #999;}
    .error : ms-input-placeholder { color: #999;}
    `]
})
export class CreateEventComponent {
    isDirty: boolean = true;

    newEvent!: any

    constructor(private router: Router, private eventService: EventService) { }

    ngOnInit() {

    }

    saveEvent(formValues: any) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }

}