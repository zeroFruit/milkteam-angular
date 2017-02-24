import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector   : 'my-nav',
  templateUrl: 'nav.component.html',
  styleUrls  : ['nav.component.scss', '../app.component.scss']
})
export class NavComponent {
  constructor(private router: Router) {
  }

  goPage(page: string) {
    location.href = page;
  }
}
