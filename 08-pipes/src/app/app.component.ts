import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  public name="sway system";
  public myNumber=12.34543534534
  public myNumberPer=0.34
  public object=[{"sno":1,"name":"Ram"},
  {"sno":2,"name":"Kumar"},
  {"sno":3,"name":"Babu"}

]
  public myDate=new Date();
}
