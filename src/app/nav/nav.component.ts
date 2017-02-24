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

  onSelected(position) {
    this.selected = position;
  }

  dropSelect() {
    this.dropDown = !this.dropDown;
  }

  constructor(private router: Router) {
  }

  switchVideo(): void {
      if (this.isBattle) {
        this.router.navigate(['/']);
        this.isBattle = !this.isBattle;
      } else {
        this.router.navigate(['/battle']);
        this.isBattle = !this.isBattle;
      }
  }

  // goPage(page: string) {
  //   location.href = page;
  // }
}
