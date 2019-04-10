import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbinding',
  templateUrl: './dbinding.component.html',
  styleUrls: ['./dbinding.component.scss']
})
export class DbindingComponent implements OnInit {


  var1:String ="First";
  var2:String ="Second";
  var3:String ="";
  var4:String ="";

  constructor() { }

  ngOnInit() {
  }

  getVar2Val(){
    this.var3="Third";
  }

}
