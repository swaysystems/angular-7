import { Injectable } from '@angular/core'; 
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { IResult } from './result';
import { throwError as ObservableThrowError,Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
 


 

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  private url:string ="https://api.github.com/search/users?q=sways";

  getUsersViaHttp():Observable<IResult>{
    return this.http.get<IResult>(this.url).pipe(catchError(this.httpErrorHandler))
  }

  httpErrorHandler(error:HttpErrorResponse){
    return ObservableThrowError(error.message || "Server Error")
  }

  getUsers(){
    return [
      {
        "login": "SwaySway",
        "id": 7465495,
        "node_id": "MDQ6VXNlcjc0NjU0OTU=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/7465495?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/SwaySway",
        "html_url": "https://github.com/SwaySway",
        "followers_url": "https://api.github.com/users/SwaySway/followers",
        "following_url": "https://api.github.com/users/SwaySway/following{/other_user}",
        "gists_url": "https://api.github.com/users/SwaySway/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/SwaySway/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/SwaySway/subscriptions",
        "organizations_url": "https://api.github.com/users/SwaySway/orgs",
        "repos_url": "https://api.github.com/users/SwaySway/repos",
        "events_url": "https://api.github.com/users/SwaySway/events{/privacy}",
        "received_events_url": "https://api.github.com/users/SwaySway/received_events",
        "type": "User",
        "site_admin": false,
        "score": 65.90396
      },
      {
        "login": "swayswaybecky",
        "id": 30737228,
        "node_id": "MDQ6VXNlcjMwNzM3MjI4",
        "avatar_url": "https://avatars2.githubusercontent.com/u/30737228?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/swayswaybecky",
        "html_url": "https://github.com/swayswaybecky",
        "followers_url": "https://api.github.com/users/swayswaybecky/followers",
        "following_url": "https://api.github.com/users/swayswaybecky/following{/other_user}",
        "gists_url": "https://api.github.com/users/swayswaybecky/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/swayswaybecky/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/swayswaybecky/subscriptions",
        "organizations_url": "https://api.github.com/users/swayswaybecky/orgs",
        "repos_url": "https://api.github.com/users/swayswaybecky/repos",
        "events_url": "https://api.github.com/users/swayswaybecky/events{/privacy}",
        "received_events_url": "https://api.github.com/users/swayswaybecky/received_events",
        "type": "User",
        "site_admin": false,
        "score": 17.892414
      },
      {
        "login": "swaysway02",
        "id": 23312786,
        "node_id": "MDQ6VXNlcjIzMzEyNzg2",
        "avatar_url": "https://avatars0.githubusercontent.com/u/23312786?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/swaysway02",
        "html_url": "https://github.com/swaysway02",
        "followers_url": "https://api.github.com/users/swaysway02/followers",
        "following_url": "https://api.github.com/users/swaysway02/following{/other_user}",
        "gists_url": "https://api.github.com/users/swaysway02/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/swaysway02/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/swaysway02/subscriptions",
        "organizations_url": "https://api.github.com/users/swaysway02/orgs",
        "repos_url": "https://api.github.com/users/swaysway02/repos",
        "events_url": "https://api.github.com/users/swaysway02/events{/privacy}",
        "received_events_url": "https://api.github.com/users/swaysway02/received_events",
        "type": "User",
        "site_admin": false,
        "score": 17.786669
      },
      {
        "login": "swayswan",
        "id": 13455026,
        "node_id": "MDQ6VXNlcjEzNDU1MDI2",
        "avatar_url": "https://avatars0.githubusercontent.com/u/13455026?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/swayswan",
        "html_url": "https://github.com/swayswan",
        "followers_url": "https://api.github.com/users/swayswan/followers",
        "following_url": "https://api.github.com/users/swayswan/following{/other_user}",
        "gists_url": "https://api.github.com/users/swayswan/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/swayswan/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/swayswan/subscriptions",
        "organizations_url": "https://api.github.com/users/swayswan/orgs",
        "repos_url": "https://api.github.com/users/swayswan/repos",
        "events_url": "https://api.github.com/users/swayswan/events{/privacy}",
        "received_events_url": "https://api.github.com/users/swayswan/received_events",
        "type": "User",
        "site_admin": false,
        "score": 17.786669
      }
    ]
  }
}
