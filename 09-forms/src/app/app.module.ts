import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import { ReativeFormsComponent } from './reative-forms/reative-forms.component'

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ReativeFormsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
