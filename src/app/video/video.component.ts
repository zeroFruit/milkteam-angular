import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector   : 'lol-video',
  templateUrl: 'video.component.html',
  styleUrls  : ['video.component.scss']
})
export class VideoComponent {
  @Input() videoId;
  @Input() black_gradient: boolean;
  @Output() video_status = new EventEmitter<number>();
  player: YT.Player;
  timer;
  subscription;
  play_rate: number;
  duration: number;
  load_rate: number;
  bar_width: number;

  constructor() {
    this.black_gradient = true;
    this.play_rate = 0;
    this.load_rate = 0;
  }

  initPlayer(player) {
    this.player = player;
    this.duration = this.player.getDuration();
    this.bar_width = document.getElementById("progress-bar").offsetWidth;
    this.timer = Observable.timer(this.player.getCurrentTime(), 10);
    this.subscription = this.timer.subscribe(() => {
      this.play_rate = this.player.getCurrentTime() * 100 / this.duration;
      this.duration = this.player.getDuration();
      this.load_rate = this.player.getVideoLoadedFraction() * 100;
    });
  }

  onStateChange(event) {
    console.log('player state', event.data);
    this.video_status.emit(event.data);
  }

  onClickedCover() {
    if(this.player == null)
      return;
    if(this.player.getPlayerState() == 1) {
      this.player.pauseVideo();
    } else if(this.player.getPlayerState() == 2) {
      this.player.playVideo();
    } else {
      console.log('loading');
    }
  }

  onClickedBar(e) {
    console.log('clicked bar');
    console.log(e);
    this.player.seekTo((e.layerX / this.bar_width) * this.player.getDuration(), true);
    //var value_clicked = e.offsetX * this.max / this.offsetWidth;
  }

  onClickedIng() {
    console.log('test');
  }
}
