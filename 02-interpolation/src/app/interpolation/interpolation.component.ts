import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  //templateUrl: './interpolation.component.html',
  template: `<h2> Welcome {{name}}</h2>
  <h2>{{10+2}}</h2>
  <h2>{{"Welcome"+name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{ getName()}}</h2>
  <!--<h2>{{ a=2+2}}</h2> -->
  <!--<h2>{{ window.location.href}}</h2> -->
  <h2>{{ locVal}}</h2>
 
  `,
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  name:String="Siva";
  locVal=window.location.href;
  constructor() { }

  ngOnInit() {
  }

  getName(){
    return "Current User "+this.name;
  }

}
