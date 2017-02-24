import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BattleChatting } from "../../modal/battle-chatting.model";

@Component({
  selector   : 'battle-chating',
  templateUrl: 'battle-chating.component.html',
  styleUrls  : ['../../app.component.scss', '../battle-video.component.scss', 'battle-chating.component.scss']
})
export class BattleChatingComponent {
  @Input() chattings: BattleChatting[];
  @Output() chatClicked = new EventEmitter<string>();
  leftChamp: Boolean = true;


  champSwitch(boolCheck) {
    if(boolCheck != this.leftChamp) {
      this.leftChamp = !this.leftChamp;
    }
  }

  onChat(message) {
    console.log(message.value);
    this.chatClicked.emit(message.value);
    message.value = '';
  }
}
