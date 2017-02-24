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

  constructor(private battleVideoService: BattleVideoService) {
    this.videos = this.battleVideoService.getVideos();
    this.battleVideoService.joinBattleChatting('GPexqi3flNM', 'GPexqi3flNM'); // lVideoId, rVideoId
    this.battleVideoService.getEventListener().subscribe(event => {
      event.picture = "/public/images/bitmap.png";
      this.chattings.unshift(event);
      console.log(this.chattings);
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

  chatClicked(message: string) {
    this.battleVideoService.chat(message);
  }
}
