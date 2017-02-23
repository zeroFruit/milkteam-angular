import { Component } from '@angular/core';
import { BattleVideoService } from "./battle-video.service";

@Component({
    selector: 'battle-video',
    templateUrl: 'battle-video.component.html',
    styleUrls: ['../app.component.scss', 'battle-video.component.css' ],
    providers: [BattleVideoService]
})
export class BattleVideoComponent {
    playStatus: Boolean = true;
    continuousStatus: Boolean = true;
    randomStatus: Boolean = false;

    playBtnClick() {
        this.playStatus = !this.playStatus;
    }

    continueBtnClick() {
        this.continuousStatus = !this.continuousStatus;
    }

    randomBtnClick() {
        this.randomStatus = !this.randomStatus;
    }

}
