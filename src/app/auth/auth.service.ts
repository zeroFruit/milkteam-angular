import { Injectable, Inject } from "@angular/core";
import { OPAQUE_TOKEN } from '../app.config';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router } from '@angular/router';
import 'rxjs/Rx';

import { User } from "../modal/user.model"
import { error } from "util";

@Injectable()
export class AuthService {
  public user: Object;
  constructor(
    @Inject(OPAQUE_TOKEN) public appConfig: any,
    private http: Http,
    private router: Router
    ) {
  }

  login(email: string, password: string): void {
    const user = new User(email, password);
    const body = JSON.stringify(user);

    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({headers: headers});

    this.http.post(`${this.appConfig.apiEndpoint}/users/login`, body, options).toPromise()
      .then(response => {

        if(response.json().code == 2) {
          localStorage.setItem('tokens', response.headers.get('x-auth'));
          this.user = response.json().data;
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
        if(response.json().code == 0) {
          localStorage.setItem('tokens', response.headers.get('x-auth'));
          this.user = response.json().data;
          this.router.navigate(['/main']);
        }
      });
  }

  /**
   * 로그아웃 함수
   * @date 2017-02-24
   * @author 김진혁
   */
  logout () {
    let token;
    token = this.getToken();
    if (token) {
      let headers = new Headers({'Content-Type': 'application/json', 'x-auth': token});
      let options = new RequestOptions({headers: headers});
      this.http.delete(`${this.appConfig.apiEndpoint}/users/me/token`, options)
        .toPromise()
        .then(response => {
            if (response.json().code == 4) {
              // 로그아웃 성공
              localStorage.removeItem('tokens');
              this.user = undefined;
            }
        })
    }
    else {
      alert('로그인이 되어있지 않습니다.');
    }
    
  }

  /**
   * 처음 로그인을 확인하는 함수
   * @date 2017-92-24
   * @author 김진혁
   */
  getUserInfo () {
    console.log('start getUserInfo');
    let token;
    token = this.getToken();
    console.log(token);
    if (token) {
      let headers = new Headers({'Content-Type': 'application/json', 'x-auth': token});
      let options = new RequestOptions({headers: headers});
      this.http.get(`${this.appConfig.apiEndpoint}/users`, options)
        .toPromise()
        .then(response => {
          if (response.json().code == 6) {
            // 로그인 성공
            this.user = response.json().data;
            return this.user;
          }
        }).catch(error => {
          console.log('no tokens');
        })

    }
  }

  /**
   * 토큰 반환함수
   * @date 2017-02-24
   * @author 김진혁
   */
  getToken () {
    return localStorage.getItem('tokens');
  }
}