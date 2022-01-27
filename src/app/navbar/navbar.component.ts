import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';
import { AuthService } from "../events/user/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

  styles: [`
    .nav .navbar-nav {font-size: 15px}
    #searchForm {margin-right: 100px}
    @media (max-width: 1200px) {#searchForm {display: none}}
    li > a.active {color:#F97924}
  `]

})
export class NavbarComponent implements OnInit {

  searchTerm: string = ""
  foundSessions: ISession[] = []

  constructor(public auth: AuthService, private eventService: EventService) { }

  ngOnInit(): void {
  }
  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions: ISession[]) => {
      this.foundSessions = sessions
      console.log(this.foundSessions);
      //console.log(jQuery().jquery);
    });
  }

}


