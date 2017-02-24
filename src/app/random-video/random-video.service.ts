import { Injectable, EventEmitter } from '@angular/core';
import { Http } from "@angular/http";
import io from 'socket.io-client';
import { Video } from "../modal/video.model";

@Injectable()
export class RandomVideoService {
  video: Video = new Video('GPexqi3flNM', '자이라 37데스하는 데드무비입니다.', '제 상대편 자이라(오멩이)가 진짜 심각하게 못해서 제가 따라다니면서 계속 죽였던 영상입니다. 제가 영상속 미포입니다.');
  socket;
  listener: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.initSocket();
  }

  /* Socket.io
   -----------------------*/
  initSocket() {
    let options = {
      path: '/api/socket/main'
    }
    let SOCKET_URL = "http://ec2-52-79-203-90.ap-northeast-2.compute.amazonaws.com:3000";
    this.socket = io.connect(SOCKET_URL, options);

    this.socket.on('newMessage', (data) => {
      console.log('newMessage', data);
      this.listener.emit({
        'date': data.date,
        'displayName': data.displayName,
        'msg': data.msg,
        'from': data.from,
        'picture': data.picture
      });
    });
  }

  getEventListener() {
    return this.listener;
  }

  joinRandomChatting(video_id) {
    let params = {
      videoId: video_id,
      user   : {
        token: localStorage.getItem('tokens')
      }
    };
    console.log(this.socket.emit('join', params));
  }

  chat(message: string) {
    console.log(message);
    let params = {
      text: message
    };
    console.log(this.socket.emit('createMessage', params));
  }

  /* Video
   -----------------------*/
  getVideo(): Video {
    // return this.http.get('url').toPromise().then(response => {
    //   return response.json().data;
    // });
    return this.video;
  }
}