/**
 * Created by hackurity on 2017. 2. 21..
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector   : 'auth',
  templateUrl: 'auth.component.html',
  styleUrls  : ['../app.component.scss', 'auth.component.scss']
})
export class AuthComponent {
  constructor(
    private router: Router
  ) {
    if(localStorage.getItem('tokens')){
      /*alert("이미 로그인 되었습니다.");
      location.href = '/main';*/
      this.router.navigate(['/main']);
    }
  }
}
