import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.scss']
})
export class TestServiceComponent implements OnInit {

  constructor(private userService:UsersService) { }

  public users=[]
  ngOnInit() {
    this.users=this.userService.getUsers()
  }

}
