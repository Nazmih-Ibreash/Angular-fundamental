import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { IUser } from "./user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser!: IUser;
    
    constructor(private http: HttpClient) { }
    
    loginUser(userName: string, _password: string) {
        let loginInfo = { username: userName, password: _password }
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        
        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap<any>(data => {
                this.currentUser = <IUser>data['user']
            }))
            .pipe(catchError(error => {
                return of(false)
            }))
      /*   this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'nazmia',
            lastName: 'husien',
        } */
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus(){
        this.http.get('/api/currentIdentity')
            .pipe(tap(data => {
                if (data instanceof Object) {
                    this.currentUser = <IUser>data
                }
            }))
        .subscribe()
            
    }

    updateCurrentUser(first:string, last: string) {
        this.currentUser.firstName = first
        this.currentUser.userName = first
        this.currentUser.lastName = last

        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        
        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options)
        
    }
}