import { Injectable } from '@angular/core'

@Injectable()
export class VoterService{
    deleteVoter(session: ISession, voterName: string){
        session.voters=session.voters.filter(voter => voter !== voterName)
    }

    addVoter(session: ISession, voterName: string){
        session.voters.push(voterName)
    }
}