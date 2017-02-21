import { Injectable, EventEmitter } from "@angular/core";
import io from 'socket.io-client';

@Injectable()
export class BattleVideoService {
  socket;
  listener: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.initSocket();
  }

  /* Socket.io
   -----------------------*/
  initSocket() {
    let options = {
      path: '/api/socket/battle'
    }
    let SOCKET_URL = "http://ec2-52-78-175-43.ap-northeast-2.compute.amazonaws.com:3000";
    this.socket = io.connect(SOCKET_URL, options);

    this.socket.on('newMessage', (data) => {
      this.listener.emit({'type': 'newMessage', 'data': data});
    });
  }
  getEventListener() {
    return this.listener;
  }
  joinBattleChatting(video_id, token_id){
    let params = {
      videoId: video_id,
      user   : {
        token: token_id
      }
    };
    this.socket.emit('join', params);
  }
  chat(message: string){
    console.log(message);
    let params = {
      text: message
    };
    this.socket.emit('createMessage', params);
  }
}