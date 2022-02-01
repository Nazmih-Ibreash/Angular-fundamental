import { IEvent, ISession } from './event.model';
import { Injectable, EventEmitter } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class EventService {
  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])))
    /*
    let subject = new Subject<IEvent[]>();
    setTimeout(() => { subject.next(EVENTS); subject.complete(); }, 200)
    return subject;
    */
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of (result as T )
 
    }
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>('/api/events/' + id)
      .pipe(catchError(this.handleError<IEvent>('getEvent')))
  }

  saveEvent(newEvent: IEvent) {
    let options ={ headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.post<IEvent>('/api/events', newEvent, options)
    .pipe(catchError(this.handleError<IEvent>('saveEvents')))
  }
/*
  updateEvent(event: IEvent) {
    let index = EVENTS.findIndex(x => x.id = event.id)
    EVENTS[index] = event
  }
  */

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm)
    .pipe(catchError(this.handleError<ISession[]>('getSessions')))
    /*
    var term = searchTerm.toLocaleLowerCase();
    var results: ISession[]=[];
    
    EVENTS.forEach(event => {
      var matchingSessions= event.sessions.filter(session =>
        session.name.toLocaleLowerCase().indexOf(term) > -1);
        matchingSessions= matchingSessions.map((session:any) => {
          session.eventId = event.id;
          return session;
        })
        results = results.concat(matchingSessions)
      })
      
      var emitter = new EventEmitter(true);
      setTimeout(() => {
        emitter.emit(results);
      },100);
      return emitter;
      */
  }
}


