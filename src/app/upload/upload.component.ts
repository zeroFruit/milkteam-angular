/**
 * Created by hackurity on 2017. 2. 21..
 */
import { Component } from "@angular/core";
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

  constructor(private uploadService: UploadService) {
    this.video = new Video();
    this.video.position = 'top';
    this.video.attribute = 'ap';
    this.video.type = 'mad';
    this.video.videoId = 'axAt9qPv8Jg';
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
    this.uploadService.upload(this.video);
    console.log(this.video);
  }

  // goPage(page: string) {
  //   location.href = page;
  // }
}
