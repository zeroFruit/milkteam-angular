import { Injectable, Inject, EventEmitter } from "@angular/core";
import { OPAQUE_TOKEN } from '../app.config';
import io from 'socket.io-client';
import { Video } from "../modal/video.model";

@Injectable()
export class BattleVideoService {
  videos: Video[] = [
    new Video('GPexqi3flNM', '자이라 37데스하는 데드무비입니다.', '제 상대편 자이라(오멩이)가 진짜 심각하게 못해서 제가 따라다니면서 계속 죽였던 영상입니다. 제가 영상속 미포입니다.'),
    new Video('GPexqi3flNM', '자이라 37데스하는 데드무비입니다.', '제 상대편 자이라(오멩이)가 진짜 심각하게 못해서 제가 따라다니면서 계속 죽였던 영상입니다. 제가 영상속 미포입니다.')
  ];
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

    this.socket.on('lNewMessage', (data) => {
      console.log('receive', data);
      this.listener.emit({
        'date': data.date,
        'displayName': data.displayName,
        'msg': data.msg,
        'side': 'left',
        'from': data.from,
        'picture': data.picture});
    });
    this.socket.on('rNewMessage', (data) => {
      console.log('receive', data);
      this.listener.emit({
        'date': data.date,
        'displayName': data.displayName,
        'msg': data.msg,
        'side': 'right',
        'from': data.from,
        'picture': data.picture});
    });
  }

  getEventListener() {
    return this.listener;
  }

  joinBattleChatting(l_video_id, r_video_id) {
    let params = {
      lVideoId: l_video_id,
      rVideoId: r_video_id,
      user   : {
        token: localStorage.getItem('tokens')
      }
    };
    this.socket.emit('join', params);
  }

  chat(message: string) {
    let params = {
      text: message
    };
    this.socket.emit('lCreateMessage', params);
  }

  /* Video
   -----------------------*/
  getVideos(): Video[] {
    return this.videos;
  }
}