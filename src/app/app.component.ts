import { AuthService } from './events/user/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
      `
})
export class AppComponent implements OnInit{
  constructor(private auth: AuthService) { }
  
  ngOnInit() {
    this.auth.checkAuthenticationStatus()
  }
}