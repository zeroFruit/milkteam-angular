/**
 * Champion 컴포넌트 (임시) -> 챔피언 실시간 검색용
 * @author 김진혁
 * @date 2017-02-21
 */
import { Component, OnInit } from '@angular/core';
import championsList from './champions';

@Component({
  selector: 'champion',
  templateUrl: 'champion.component.html',
  styleUrls: ['../app.component.scss', 'champion.component.scss']
})
export class ChampionComponent implements OnInit {
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
