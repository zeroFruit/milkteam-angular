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
  isBattle: Boolean;

  onSelected(position) {
    this.selected = position;
  }

  dropSelect() {
    console.log(this.authService.user);
    this.dropDown = !this.dropDown;
  }

  constructor(
    private router: Router,
    private authService: AuthService
    ) {
      console.log(this.authService.user);
  }

  switchVideo(): void {
    /*
      if (this.isBattle) {
        this.router.navigate(['/']);
        this.isBattle = !this.isBattle;
      } else {
        this.router.navigate(['/battle']);
        this.isBattle = !this.isBattle;
      }*/
      alert(1); 
  }

  /**
   * 로그아웃 함수
   */
  onLogout () {
    this.authService.logout();  
  }
  // goPage(page: string) {
  //   location.href = page;
  // }
}
