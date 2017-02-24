import { Component } from '@angular/core';

@Component({
    selector: 'customcard',
    templateUrl: 'customcard.component.html',
    styleUrls: ['../app.component.scss', 'customcard.component.scss']
})
export class CustomcardComponent {
  // character: string[] = [];
  // position: string[] = [];
  // tier: string[] = [];

  isAp: boolean = false;
  isAd: boolean = false;
  isTop: boolean = false;
  isJungle: boolean = false;
  isMid: boolean = false;
  isDealer: boolean = false;
  isSup: boolean = false;
  isUnranked: boolean = false;
  isBronze: boolean = false;
  isSilver: boolean = false;
  isGold: boolean = false;
  isPlatinum: boolean = false;
  isDiamond: boolean = false;
  isMaster: boolean = false;
  isChallenger: boolean = false;

  activeBtn1() {
    this.isAp = !this.isAp;
  }
  activeBtn2() {
    this.isAd = !this.isAd;
  }
  activeBtn3() {
    this.isTop = !this.isTop;
  }
  activeBtn4() {
    this.isJungle = !this.isJungle;
  }
  activeBtn5() {
    this.isMid = !this.isMid;
  }
  activeBtn6() {
    this.isDealer = !this.isDealer;
  }
  activeBtn7() {
    this.isSup = !this.isSup;
  }
  activeBtn8() {
    this.isUnranked = !this.isUnranked;
  }
  activeBtn9() {
    this.isBronze = !this.isBronze;
  }
  activeBtn10() {
    this.isSilver = !this.isSilver;
  }
  activeBtn11() {
    this.isGold = !this.isGold;
  }
  activeBtn12() {
    this.isPlatinum = !this.isPlatinum;
  }
  activeBtn13() {
    this.isDiamond = !this.isDiamond;
  }
  activeBtn14() {
    this.isMaster = !this.isMaster;
  }
  activeBtn15() {
    this.isChallenger = !this.isChallenger;
  }

  // 
  // goPage(page: string) {
  //   location.href = page;
  // }

  // characterBtn(character) {
  //   this.character.push(character)
  // }

  // positionBtn(position) {
  //   this.position.push(position)
  // }
}
