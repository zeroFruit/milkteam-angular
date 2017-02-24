/**
 * Created by hackurity on 2017. 2. 15..
 */
import { Component, OnInit } from '@angular/core';
import { Video } from "../modal/video.model";
import { RandomChatting } from "../modal/random-chatting.model";
import { RandomVideoService } from "./random-video.service";

@Component({
  selector: 'random-video',
  templateUrl: 'random-video.component.html',
  styleUrls: ['random-video.component.scss'],
  providers: [RandomVideoService]
})
export class RandomVideoComponent implements OnInit {
  chattings: RandomChatting[] = [];
  video: Video;
  //videoId = "GPexqi3flNM";

  constructor(private randomVideoService: RandomVideoService) {
    this.randomVideoService.joinRandomChatting('GPexqi3flNM');
    this.randomVideoService.getEventListener().subscribe(event => {
        event.picture = "/public/images/bitmap.png";
        this.chattings.unshift(event);
    });
  }

  ngOnInit() {
    // this.randomVideoService.getVideo().then(video => {
    //   this.video = video;
    // });
    this.video = this.randomVideoService.getVideo();
    console.log(this.video);
  }

  videoStatusChange(status) {

  }

  chatClicked(message: string) {
    this.randomVideoService.chat(message);
  }
}
