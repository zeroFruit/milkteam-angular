import { Component, OnInit } from '@angular/core';
import championsList from '../champion/champions';

@Component({
  selector: 'upload',
  templateUrl: 'upload.component.html',
  styleUrls: ['upload.component.scss']
})
export class UploadComponent implements OnInit {
  myChampion: String;
  champions: Object[];
  constructor() {
    this.champions = championsList;
  }

  /**
   * 챔피언 이미지 src 반환함수
   * @params enName
   */
  championImage (enName) {
    return `../../../public/images/champions/${enName}.png`;
  }

  ngOnInit() {}
}