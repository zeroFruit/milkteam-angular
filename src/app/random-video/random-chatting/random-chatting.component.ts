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
  @Input() chattings: RandomChatting[] = [];
  @Output() chatClicked = new EventEmitter<string>();

  onChat(message: string){
    console.log(message);
    this.chatClicked.emit(message);
    console.log(this.chattings);
    this.chattings.push(new RandomChatting('Angular', message, '#'));
  }
}
