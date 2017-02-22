/**
 * Created by hackurity on 2017. 2. 21..
 */
import { Component } from "@angular/core";

@Component({
  selector   : 'upload',
  templateUrl: 'upload.component.html',
  styleUrls  : ['upload.component.scss']
})
export class UploadComponent {
  type: string;

  toggleBtn(type) {
    this.type = type;
  }
}