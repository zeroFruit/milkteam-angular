import { Component, OnInit } from '@angular/core';
import { BattleVideoService } from "./battle-video.service";

@Component({
    selector: 'battle-video',
    templateUrl: 'battle-video.component.html',
    styleUrls: ['../app.component.scss', 'battle-video.component.css' ],
    providers: [BattleVideoService]
})
export class BattleVideoComponent implements OnInit {

    constructor() {}

    ngOnInit() {

    }
}
