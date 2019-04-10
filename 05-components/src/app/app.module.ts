import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompTestComponent } from './comp-test/comp-test.component';
import { CompTestInnerComponent } from './comp-test-inner/comp-test-inner.component';

@NgModule({
  declarations: [
    AppComponent,
    CompTestComponent,
    CompTestInnerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
