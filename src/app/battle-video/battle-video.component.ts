import { Component } from '@angular/core';
import { BattleVideoService } from "./battle-video.service";
import { Video } from "../modal/video.model";
import { BattleChatting } from "../modal/battle-chatting.model";

@Component({
  selector   : 'battle-video',
  templateUrl: 'battle-video.component.html',
  styleUrls  : ['../app.component.scss', 'battle-video.component.scss'],
  providers  : [BattleVideoService]
})
export class BattleVideoComponent {
  playStatus: Boolean = true;
  continuousStatus: Boolean = true;
  randomStatus: Boolean = false;
  videos: Video[];
  chattings: BattleChatting[] = [];
  battleInfo: any;

  constructor(private battleVideoService: BattleVideoService) {
    this.battleVideoService.getBattleInfo().then(data => {
      this.battleInfo = data;
      console.log(this.battleInfo.videos[0]);
      this.battleVideoService.joinBattleChatting(data.videos[0].videoId, data.videos[1].videoId); // lVideoId, rVideoId
      this.battleVideoService.getEventListener().subscribe(event => {
        event.picture = "/public/images/bitmap.png";
        this.chattings.unshift(event);
        console.log(this.chattings);
      });
    });
  }

  playBtnClick() {
    this.playStatus = !this.playStatus;
  }

  continueBtnClick() {
    this.continuousStatus = !this.continuousStatus;
  }

  randomBtnClick() {
    this.randomStatus = !this.randomStatus;
  }

  videoStatusChange(status: string, video_num: number) {

  }

  chatClicked(event: Object) {
    this.battleVideoService.chat(event);
  }
}
