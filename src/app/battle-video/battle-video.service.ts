import { Injectable, Inject, EventEmitter } from "@angular/core";
import { OPAQUE_TOKEN } from '../app.config';
import io from 'socket.io-client';

@Injectable()
export class BattleVideoService {
  socket;
  listener: EventEmitter<any> = new EventEmitter();

  constructor(
    @Inject(OPAQUE_TOKEN) public appConfig: any
  ) {
    this.initSocket();
  }

  /* Socket.io
   -----------------------*/
  initSocket() {
    let options = {
      path: this.appConfig.socketPath
    }
    let SOCKET_URL = this.appConfig.socketEndpoint;
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