import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser!: IUser;
    
    loginUser(userName: string, _password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'nazmia',
            lastName: 'husien',
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(first:string, last: string) {
        this.currentUser.firstName = first
        this.currentUser.userName = first
        this.currentUser.lastName = last
        
    }
}