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

  isActive1: boolean = false;
  isActive2: boolean = false;
  isActive3: boolean = false;
  isActive4: boolean = false;
  isActive5: boolean = false;
  isActive6: boolean = false;
  isActive7: boolean = false;
  isActive8: boolean = false;
  isActive9: boolean = false;
  isActive10: boolean = false;
  isActive11: boolean = false;
  isActive12: boolean = false;
  isActive13: boolean = false;
  isActive14: boolean = false;
  isActive15: boolean = false;

  activeBtn1() {
    this.isActive1 = !this.isActive1;
  }
  activeBtn2() {
    this.isActive2 = !this.isActive2;
  }
  activeBtn3() {
    this.isActive3 = !this.isActive3;
  }
  activeBtn4() {
    this.isActive4 = !this.isActive4;
  }
  activeBtn5() {
    this.isActive5 = !this.isActive5;
  }
  activeBtn6() {
    this.isActive6 = !this.isActive6;
  }
  activeBtn7() {
    this.isActive7 = !this.isActive7;
  }
  activeBtn8() {
    this.isActive8 = !this.isActive8;
  }
  activeBtn9() {
    this.isActive9 = !this.isActive9;
  }
  activeBtn10() {
    this.isActive10 = !this.isActive10;
  }
  activeBtn11() {
    this.isActive11 = !this.isActive11;
  }
  activeBtn12() {
    this.isActive12 = !this.isActive12;
  }
  activeBtn13() {
    this.isActive13 = !this.isActive13;
  }
  activeBtn14() {
    this.isActive14 = !this.isActive14;
  }
  activeBtn15() {
    this.isActive15 = !this.isActive15;
  }

  // characterBtn(character) {
  //   this.character.push(character)
  // }

  // positionBtn(position) {
  //   this.position.push(position)
  // }
}
