import { Component, Input } from '@angular/core';
import { BattleChatting } from "../../../modal/battle-chatting.model";

@Component({
  selector   : 'battle-chat-message',
  templateUrl: 'battle-chat-message.component.html',
  styleUrls  : ['../../../app.component.scss', '../../battle-video.component.scss', '../battle-chating.component.scss', 'battle-chat-message.component.scss']
})
export class BattleChatMessageComponent {
  @Input() chattings: BattleChatting[] = [];
}
