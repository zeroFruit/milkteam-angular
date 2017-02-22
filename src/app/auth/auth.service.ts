import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

import { User } from "../modal/user.model"

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(email: string, password: string): void {
    console.log("try login");
    const user = new User(email, password);
    const body = JSON.stringify(user);
    console.log(body);
    // const headers = new Headers({
    //   "Content-Type": "application/json",
    //   "Access-Control-Expose-Headers": "Etag"
    // });
    let headers = new Headers({
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Expose-Headers': 'ETag'
    });
    console.log(headers);
    const options = new RequestOptions({headers: headers});
    console.log(options);
    this.http.post('http://ec2-52-79-203-90.ap-northeast-2.compute.amazonaws.com:3002/users/login', body, options).toPromise()
      .then(response => {
        console.log("response");
        console.log(response.headers.toJSON());
        console.log(response.headers);
        console.log(response);
        console.log(response.headers.get('Etag'));
        console.log(response.json().token);
        if(response.json().status == 'Success') {
          localStorage.setItem('tokens', response.json().token);
        }
      });
  }

  join(email: string, password: string, nickname: string): void {
    console.log("try join");
    const user = new User(email, password, nickname);
    const body = JSON.stringify(user);
    console.log(body);
    const headers = new Headers({"Content-Type": "application/json", "x-auth": "asdf"});
    const options = new RequestOptions({headers: headers});
    this.http.post('http://ec2-52-79-203-90.ap-northeast-2.compute.amazonaws.com:3002/users', body, options).toPromise()
      .then(response => {
        response.json();
        if(response.json().status == 'Success') {
          localStorage.setItem('tokens', response.json().token);
        }
      });
  }
}