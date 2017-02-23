/**
 * Created by hackurity on 2017. 2. 21..
 */
import { Component } from "@angular/core";

@Component({
  selector   : 'upload',
  templateUrl: 'upload.component.html',
  styleUrls  : ['../app.component.scss', 'upload.component.css']
})
export class UploadComponent {
  type: string;

  toggleBtn(type) {
    this.type = type;
  }
}
