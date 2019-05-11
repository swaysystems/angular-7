import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms'; 
import { forbiddenEmailValidator } from '../shared/email.validator'
import { PassswordValidator} from '../shared/password.validator'
import {RegistrationService} from '../registration.service';


@Component({
  selector: 'app-reative-forms',
  templateUrl: './reative-forms.component.html',
  styleUrls: ['./reative-forms.component.sass']
})
export class ReativeFormsComponent implements OnInit {
  

  get fEmail(){
    return this.registrationForm.get('email');
  }

  get fDName(){
    return this.registrationForm.get('dName');
  }

  get fSkills(){
    return this.registrationForm.get('skills') as FormArray;
  }
  addSkills(){
    console.log("Add")
    this.fSkills.push(this.fb.control(''));
  }


  registrationForm:FormGroup;
  errorMsg = '';

  constructor(private fb:FormBuilder,private _sService:RegistrationService) { }
  

registrationFormOld=new FormGroup({
  email:new FormControl('demo@swaysystems.com'),
  password:new FormControl(''),
  cPassword:new FormControl(''),
  address:new FormGroup({
    city:new FormControl(''),
    state:new FormControl(''),
    pin:new FormControl('')
  })
});

 



  ngOnInit() {
    this.registrationForm=this.fb.group({
      email:['demo-fb@swaysystems.com',[Validators.required,Validators.email,forbiddenEmailValidator(['info','enquiry','hr'])]],
      dName:[''],
      isDName:[false],
      password:[''],
      cPassword:[''],
      skill:[''],
      skills:this.fb.array([]),
      address:this.fb.group({
        city:[''],
        state:[''],
        pin:['']
      })
    },{validator: PassswordValidator});

    this.registrationForm.get('isDName').valueChanges.subscribe(checkedValue=>{
      const dName=this.registrationForm.get('dName');
      if(checkedValue){
        dName.setValidators(Validators.required);
      }else{
        dName.clearValidators();
      }
      dName.updateValueAndValidity();
    })
  }

  onSubmit(){  

    console.log("Submitting")
    this._sService.registration(this.registrationForm.value).subscribe(
      data=>console.log(data),
      error => this.errorMsg = error
      );
  }

  loadData(){
    this.registrationForm.setValue({
      email:'demo2@swaysystems.com',
      password:'123456',
      cPassword:'123456',
      address:{
        city:"Chennai",
        state:"Tamil Nadue",
        pin:'600000'
      }

    });

  }

  loadPartialData(){
    this.registrationForm.patchValue({
      email:'demo3@swaysystems.com',
      password:'123456',
      cPassword:'123456'

    });

  }
}
