import { ISession } from './../shared/event.model';
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";



@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
    em { float: right; color: #E05C65;padding-left: 10px;} 
    .error input, .error select, .error textarea {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color: #999;}
    .error : ms-input-placeholder { color: #999;}
    `]
})
export class CreateSessionComponent{
    @Output() saveNewSession = new EventEmitter()

    newSessionForm!: FormGroup
    name!: FormControl
    presenter!: FormControl
    duration!: FormControl
    level!: FormControl
    abstract!: FormControl

    ngOnInit(){
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)])
        
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }


    saveSession(formValues: any): void {
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        this.saveNewSession.emit(session)
    }
}