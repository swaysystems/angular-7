import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
 

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {



  @Input('parentDataA') public name;
  @Input() public parentData;
  @Output() public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickEvent(){
    this.childEvent.emit('dsfsafasfsad');
  }

}
