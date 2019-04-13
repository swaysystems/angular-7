import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { TestServiceDetailComponent } from './test-service-detail/test-service-detail.component';
import { UsersService } from './users.service';
import { TestServiceHttpComponent } from './test-service-http/test-service-http.component'

@NgModule({
  declarations: [
    AppComponent,
    TestServiceComponent,
    TestServiceDetailComponent,
    TestServiceHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
