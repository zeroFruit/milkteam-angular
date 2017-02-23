import { Component } from '@angular/core';

@Component({
    selector: 'my-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.scss', '../app.component.scss']
})
export class NavComponent {
  selected: string;
  dropDown: Boolean = true;

  onSelected(position) {
    this.selected = position;
  }

  dropSelect() {
    this.dropDown = !this.dropDown;
  }
}
