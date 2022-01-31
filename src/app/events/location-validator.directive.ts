import { Directive } from "@angular/core";
import {  FormGroup, Validator, NG_VALIDATORS } from "@angular/forms";


@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})
export class LocationValidator implements Validator{
    validate(formGroup: FormGroup): {[key: string]:any} | any {
        let addressControl = formGroup.controls['address']
        let cityControl = formGroup.controls['city']
        let countryControl = formGroup.controls['country']
        let onlineControl = (<FormGroup>formGroup.root).controls['onlineUrl']
        

        if ((addressControl && addressControl.value
            && cityControl && cityControl.value
            && countryControl && countryControl.value) ||
            (onlineControl && onlineControl.value)) {
            return null
        } else {
            return {validateLocation: false}
            }
        
    }
    
}