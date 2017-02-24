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
  videos: Video[];
  videoId: string;

  constructor(private randomVideoService: RandomVideoService) {
    this.randomVideoService.joinRandomChatting(this.videoId);
    this.randomVideoService.getEventListener().subscribe(event => {
        event.picture = "/public/images/bitmap.png";
        this.chattings.unshift(event);
    });

    this.randomVideoService.getVideo().then(video => {
      this.videos = video.videos;
      this.videoId = this.videos[0].videoId;
    });
  }

  ngOnInit() {
    //this.video = this.randomVideoService.getVideo();
  }

  videoStatusChange(status) {

  }

  chatClicked(message: string) {
    this.randomVideoService.chat(message);
  }
}
