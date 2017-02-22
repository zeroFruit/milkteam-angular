import { Component, OnInit } from '@angular/core';
import { BattleVideoService } from "./battle-video.service";

@Component({
    selector: 'battle-video',
    templateUrl: 'battle-video.component.html',
    styleUrls: ['battle-video.component.scss'],
    providers: [BattleVideoService]
})
export class BattleVideoComponent implements OnInit {

    constructor() {}

    ngOnInit() {

    }
}
