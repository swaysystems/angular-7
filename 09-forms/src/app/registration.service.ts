import { Injectable } from '@angular/core'; 
import { FormGroup } from '@angular/forms';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import { throwError as ObservableThrowError,Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url='https://api1.github.com/search/users?q=sways'
  
  constructor(private _http:HttpClient) { }

  registration(fValue){

    console.log(fValue)
    return this._http.post<any>(this._url,fValue).pipe(catchError(this.httpErrorHandler))
  }
 

  httpErrorHandler(error:HttpErrorResponse){
    return ObservableThrowError(error.message || "Server Error")
  }
}
