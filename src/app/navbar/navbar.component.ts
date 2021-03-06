import { Component, OnInit } from '@angular/core';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';
import { AuthService } from "../events/user/auth.service";
import * as $ from 'jquery';

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
export class NavbarComponent {

  searchTerm="";
  foundSession!: ISession[];


  constructor( public auth:AuthService, private eventService : EventService) {
   
   }



  searchSessions(searchTerm:any){
      this.eventService.searchSessions(searchTerm).subscribe((sessions: ISession[]) =>{
        this.foundSession = sessions        
      })
  }

}
