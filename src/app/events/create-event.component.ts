import { Component } from "@angular/core";

@Component({
    template: `
        <h1>New Event</h1>
        <hr>
        <div>
            <h3>[create event from well go here]</h3>
            <br>
            <br>
            <button type="submit" class="btn btn-danger">Save</button>
            <button type="button" class="btn btn-default" [routerLink]="['/events']">Cancel</button>
        </div>
    `
})
export class CreateEventComponent {
    isDirty: boolean = true;
    constructor() {}
}