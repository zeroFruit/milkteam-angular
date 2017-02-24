import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';

@Component({
  selector   : 'my-nav',
  templateUrl: 'nav.component.html',
  styleUrls  : ['nav.component.scss', '../app.component.scss']
})
export class NavComponent {
  selected: string;
  dropDown: Boolean = true;
  isBattle: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
    ) {
      if(router.url === '/battle') {
        this.isBattle = true;
      }
  }

  onSelected(position) {
    this.selected = position;
    console.log(this.isBattle);
  }

  dropSelect() {
    console.log(this.authService.user);
    this.dropDown = !this.dropDown;
  }

    // console.log(this.router.url);
    // if (this.router.url == '/battle') {
    //   this.isBattle = true;
    // } else {
    //   this.isBattle = true;
    // }

  switchVideo(url:string) {
      if (url === "/battle") {
        this.router.navigate(['/']);
        this.isBattle = !this.isBattle;
        // console.log(this.router.url === "/battle");
      } else {
        this.router.navigate(['/battle']);
        this.isBattle = !this.isBattle;
        // console.log(this.router.url);
      }
  }

  /**
   * 로그아웃 함수
   */
  onLogout () {
    this.authService.logout();  
  }

  goPage(page: string) {
    this.router.navigate([page]);
  }
  // goPage(page: string) {
  //   location.href = page;
  // }
}
