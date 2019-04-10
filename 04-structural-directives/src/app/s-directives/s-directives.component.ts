import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-s-directives',
  templateUrl: './s-directives.component.html',
  styleUrls: ['./s-directives.component.scss']
})
export class SDirectivesComponent implements OnInit {

  userSearchData:any;
  sQuery:any;
  public sVal="sway";
  constructor(private httpC:HttpClient) { }

  ngOnInit() {
  }


 

  searchUsers(sQuery){
    let url="https://api.github.com/search/users?q="+this.sQuery;
    this.httpC.get(url,{responseType: 'json'}).subscribe(resp=>{
       
      this.userSearchData=resp;
    });
  }

}
