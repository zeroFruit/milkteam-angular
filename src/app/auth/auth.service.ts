import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

import { User } from "../modal/user.model"
import { error } from "util";

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(email: string, password: string): void {
    console.log("try login");
    const user = new User(email, password);
    const body = JSON.stringify(user);
    console.log(body);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    console.log(headers);
    const options = new RequestOptions({headers: headers});
    console.log(options);
    this.http.post('http://ec2-52-79-203-90.ap-northeast-2.compute.amazonaws.com:3002/users/login', body, options).toPromise()
      .then(response => {
        console.log("login response", response.json());
        if(response.json().code == 2) {
          localStorage.setItem('tokens', response.headers.get('x-auth'));
          location.href = "/main";
          return;
        }
      })
      .catch(error => {
        console.log(error);
        if(error.json().code == 3) {
          alert("로그인 실패");
          return;
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