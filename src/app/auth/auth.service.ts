import { Injectable, Inject } from "@angular/core";
import { OPAQUE_TOKEN } from '../app.config';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router } from '@angular/router';
import 'rxjs/Rx';

import { User } from "../modal/user.model"
import { error } from "util";

@Injectable()
export class AuthService {
  constructor(
    @Inject(OPAQUE_TOKEN) public appConfig: any,
    private http: Http,
    private router: Router
    ) {
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
    this.http.post(`${this.appConfig.apiEndpoint}/users/login`, body, options).toPromise()
      .then(response => {
        console.log("login response", response.json());
        if(response.json().code == 2) {
          localStorage.setItem('tokens', response.headers.get('x-auth'));
          //location.href = "/main";
          this.router.navigate(['/main']);
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
    this.http.post(`${this.appConfig.apiEndpoint}/users`, body, options).toPromise()
      .then(response => {
        response.json();
        if(response.json().status == 'Success') {
          localStorage.setItem('tokens', response.json().token);
        }
      });
  }
}