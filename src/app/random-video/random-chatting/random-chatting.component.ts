/**
 * Created by hackurity on 2017. 2. 17..
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { RandomChatting } from "../../modal/random-chatting.model";


@Component({
  selector   : 'random-chatting',
  templateUrl: 'random-chatting.component.html',
  styleUrls  : ['random-chatting.component.scss']
})
export class RandomChattingComponent {
  @Input() chattings: RandomChatting[];
  @Output() chatClicked = new EventEmitter<string>();

  // 채팅 닫기
  @Output() chatOn = new EventEmitter<Boolean>();


  onChat(message: any){
    this.chatClicked.emit(message.value);
    message.value = '';
    //console.log(this.chattings);
    //this.chattings.push(new RandomChatting('Angular', message, '#'));
  }

  chatClose() {
    this.chatOn.emit(false);
  }
}
