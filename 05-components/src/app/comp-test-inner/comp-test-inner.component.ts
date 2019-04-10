import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-comp-test-inner',
  //selector: '.app-comp-test-inner',
  selector: '[app-comp-test-inner]',
  //templateUrl: './comp-test-inner.component.html',
  template: `<div>MyTest</div>`,
  //styleUrls: ['./comp-test-inner.component.scss']
  styles: ['h1 { font-weight: normal; }']
})
export class CompTestInnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
