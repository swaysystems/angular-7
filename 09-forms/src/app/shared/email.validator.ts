import { AbstractControl, ValidatorFn } from "@angular/forms";

/*export function forbiddenEmailValidator(control:AbstractControl):{[key:string]:any}|null {

    const forbidden=/info/.test(control.value);
    return forbidden?{'forbiddernEmail':{value:control.value}}:null;
}*/

export function forbiddenEmailValidator(forbiddenEmails:String[]):ValidatorFn {

    return (control:AbstractControl):{[key:string]:any}|null =>{ 
         var forbidden=false;
        //const forbidden=forbiddenEmails.includes(control.value);
        for(let fEmail in forbiddenEmails){
            forbidden=control.value.includes(forbiddenEmails[fEmail]); 
            if(forbidden){
                break;
            }
        }
        
        return forbidden?{'forbiddernEmail':{value:control.value}}:null;
    }
}