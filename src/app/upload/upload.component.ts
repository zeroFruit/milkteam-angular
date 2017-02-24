/**
 * Created by hackurity on 2017. 2. 21..
 */
import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Video } from "../modal/video.model";
import { UploadService } from "./upload.service";

@Component({
  selector   : 'upload',
  templateUrl: 'upload.component.html',
  styleUrls  : ['../app.component.scss', 'upload.component.css']
})
export class UploadComponent {
  type: string;
  video: Video;

  constructor(
    private uploadService: UploadService,
    private router: Router
  ) {
    this.video = new Video();
    this.video.position = 'top';
    this.video.attribute = 'ap';
    this.video.type = 'mad';
  }

  toggleBtn(type) {
    this.video.type = type;
  }

  onChampionChange(newValue) {
    this.video.champion = newValue;
  }

  upload() {
    if(!this.video.isSetForUpload()) {
      console.log(this.video);
      alert("빈 항목이 있습니다.");
      return;
    }

    this.video.videoId = this.parseYoutubeIdFromUrl(this.video.url);

    this.uploadService.upload(this.video)
      .then(response => {
        this.router.navigate(['/mypage']);
      });
  }

  
  /**
   * Youtube Id 파싱 함수
   */
  parseYoutubeIdFromUrl(url: any): string {
    let ID = '';
    url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    }
    else {
      ID = url;
    }
      return ID;
  }

  // goPage(page: string) {
  //   location.href = page;
  // }
}
