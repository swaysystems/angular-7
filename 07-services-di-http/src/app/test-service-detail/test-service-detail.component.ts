import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'

@Component({
  selector: 'app-test-service-detail',
  templateUrl: './test-service-detail.component.html',
  styleUrls: ['./test-service-detail.component.scss']
})
export class TestServiceDetailComponent implements OnInit {


  public users=[]


  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.users=this.userService.getUsers()
  }

}
