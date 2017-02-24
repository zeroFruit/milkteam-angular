import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector   : 'my-nav',
  templateUrl: 'nav.component.html',
  styleUrls  : ['nav.component.scss', '../app.component.scss']
})
export class NavComponent {
  selected: string;
  dropDown: Boolean = true;
  isBattle: Boolean;
  isLogin: Boolean;


  onSelected(position) {
    this.selected = position;
  }

  dropSelect() {
    this.dropDown = !this.dropDown;
  }

  constructor(private router: Router) {
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

  // goPage(page: string) {
  //   location.href = page;
  // }
}
