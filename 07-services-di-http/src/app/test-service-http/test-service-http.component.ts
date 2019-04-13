import { Component, OnInit } from '@angular/core'; 
import {UsersService} from '../users.service'

@Component({
  selector: 'app-test-service-http',
  templateUrl: './test-service-http.component.html',
  styleUrls: ['./test-service-http.component.scss']
})
export class TestServiceHttpComponent implements OnInit {

  public users=[]
  public errorMsg;

  constructor(private user:UsersService) { }

  ngOnInit() {
    this.user.getUsersViaHttp().subscribe(data=>this.users=data.items,error=>this.errorMsg=error);
  }

}
