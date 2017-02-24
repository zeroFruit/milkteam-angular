import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BattleChatting } from "../../modal/battle-chatting.model";
import { Video } from "../../modal/video.model";

@Component({
  selector   : 'battle-chating',
  templateUrl: 'battle-chating.component.html',
  styleUrls  : ['../../app.component.scss', '../battle-video.component.scss', 'battle-chating.component.scss']
})
export class BattleChatingComponent {
  @Input() chattings: BattleChatting[];
  @Input() videos: Video[];
  @Output() chatClicked = new EventEmitter<Object>();
  leftChamp: Boolean = true; // left = true, right = false


  champSwitch(boolCheck) {
    if(boolCheck != this.leftChamp) {
      this.leftChamp = !this.leftChamp;
    }
  }

  onChat(message) {
    console.log(message.value);
    let side: string = this.leftChamp ? 'left' : 'right';
    this.chatClicked.emit([message.value, side]);
    message.value = '';
  }
}
