/**
 * Created by hackurity on 2017. 2. 21..
 */
import { Component } from '@angular/core';

@Component({
  selector   : 'auth',
  templateUrl: 'auth.component.html',
  styleUrls  : ['auth.component.scss']
})
export class AuthComponent {
  constructor() {
    if(localStorage.getItem('tokens')){
      alert("이미 로그인 되었습니다.");
      location.href = '/main';
    }
  }
}
