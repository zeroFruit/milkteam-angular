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
  switchChecked: boolean = false;

  constructor(private router: Router) {
    if(router.url === '/battle') {
      this.switchChecked = true;
    }
  }

  onSelected(position) {
    this.selected = position;
  }

  dropSelect() {
    this.dropDown = !this.dropDown;
  }

  goPage(page: string) {
    location.href = page;
  }
}
