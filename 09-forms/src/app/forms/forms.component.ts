import { Component, OnInit } from '@angular/core';
import { SignIn } from '../sign-in';
import {SignInService} from '../sign-in.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {

  constructor(private _sService:SignInService) { }

  ngOnInit() {
  }
  
  stateList=this._sService.getStateList(); 
  

  //signInModel=new SignIn("info@swaystems.com","123456","Male","Address1","Address2","Chennai","Tamil Nadu",600091,true);

  signInModel=new SignIn("","123456","Male","Address1","Address2","Chennai","default",600091,true);
  stateHasError=false;
  submitted = false;
  errorMsg = '';

  validateState(value){
    if(value==='default'){
      this.stateHasError=true;
    }else{
      this.stateHasError=false;
    }
  }

  onSubmit(){ 
    this.submitted=true
    this._sService.signIn(this.signInModel).subscribe(
      data=>console.log(data),
      error => this.errorMsg = error.statusText
      );
  }

}
