import { Component } from '@angular/core';

@Component({
    selector: 'battle-chating',
    templateUrl: 'battle-chating.component.html',
    styleUrls: ['../../app.component.scss', '../battle-video.component.css', 'battle-chating.component.scss']
})
export class BattleChatingComponent {
    leftChamp: Boolean = true;

    champSwitch(boolCheck) {
      if (boolCheck != this.leftChamp) {
        this.leftChamp = !this.leftChamp;
      }
    }
}
