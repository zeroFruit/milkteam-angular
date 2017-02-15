import { Component, ElementRef } from '@angular/core';
import { Observable} from 'rxjs/Rx';

@Component({
    selector: 'video',
    templateUrl: 'video.component.html',
    styleUrls: ['video.component.scss']
})
export class VideoComponent {
    player: YT.Player;
    private id: string = 'qDuKsiwS5xw';
    ticks = 0;
    timer;
    subscription;
    play_rate: number;
    duration: number;
    load_rate: number;
    bar_width: number;

    constructor(element: ElementRef) {
    }

    ngOnInit() {
      //this.timer = Observable.timer(0, 20);
      //this.subscription = this.timer.subscribe(t => this.ticks = t);
      this.play_rate = 0;
      this.load_rate = 0;
    }

    savePlayer(player) {
      this.player = player;
      console.log("duration: " + this.player.getDuration());
      this.duration = this.player.getDuration();
      this.bar_width = document.getElementById("progress-bar").offsetWidth;
      console.log("bar_width: " + this.bar_width);
    }

    onStateChange(event) {
      console.log('player state', event.data);
      if(event.data == 1) {
        this.timer = Observable.timer(this.player.getCurrentTime(), 10);
        this.subscription = this.timer.subscribe(
          t => {
            this.play_rate = this.player.getCurrentTime() * 100 / this.duration;
            this.duration = this.player.getDuration();
            this.load_rate = this.player.getVideoLoadedFraction() * 100;
          });
      } else if(event.data == 2) {
        this.subscription.unsubscribe();
      }
      console.log(this.player.getCurrentTime());
    }

    onGetCurrentTime() {
      console.log(this.subscription);
      this.subscription.unsubscribe();
    }

    onClickedCover() {
      if(this.player.getPlayerState() == 1) {
        this.player.pauseVideo();
      } else {
        this.player.playVideo();
      }
    }

    onClickedBar(e) {
      console.log('clicked bar');
      console.log(e);
      console.log((e.layerX / this.bar_width) * this.player.getDuration());
      this.player.seekTo((e.layerX / this.bar_width) * this.player.getDuration(), true);
      //var value_clicked = e.offsetX * this.max / this.offsetWidth;
    }

    onClickedIng() {
      console.log('test');
    }
}
