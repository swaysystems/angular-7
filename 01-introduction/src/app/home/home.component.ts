import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  key:string="sway";
  keyList:string[]=[];

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.keyList.push(this.key);
  }

  reset(){
    this.keyList=[];
  }

}
