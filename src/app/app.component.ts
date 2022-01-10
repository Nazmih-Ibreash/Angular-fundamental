import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
      <app-navbar></app-navbar>
      <events-list></events-list>
      `
})
export class AppComponent {
  title = 'ng-funamental';
}