/**
 * Created by hackurity on 2017. 2. 16..
 */
import { Component, Input } from '@angular/core';
import { Video } from "../../modal/video.model";

@Component({
  selector   : 'random-info',
  templateUrl: 'random-info.component.html',
  styleUrls  : ['random-info.component.scss']
})
export class RandomInfoComponent {
  @Input() videos: Video[];

  constructor() {}

  nextVdieo(){}
}
