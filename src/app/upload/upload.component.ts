/**
 * Created by hackurity on 2017. 2. 21..
 */
import { Component } from "@angular/core";
import { Video } from "../modal/video.model";
import { UploadService } from "./upload.service";

@Component({
  selector   : 'upload',
  templateUrl: 'upload.component.html',
  styleUrls  : ['upload.component.scss']
})
export class UploadComponent {
  type: string;
  video: Video;

  constructor(private uploadService: UploadService) {
    this.video = new Video();
  }

  toggleBtn(type) {
    this.video.type = type;
  }

  upload() {
    if(!this.video.isSetForUpload()) {
      alert("빈 항목이 있습니다.");
      return;
    }
    this.uploadService.upload(this.video);
    console.log(this.video);
  }
}