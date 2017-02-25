import { Injectable, Inject, EventEmitter } from "@angular/core";
import { OPAQUE_TOKEN } from '../app.config';
import { Router } from '@angular/router';
import io from 'socket.io-client';
import { Video } from "../modal/video.model";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class BattleVideoService {
  videos: Video[] = [
    new Video('GPexqi3flNM', '자이라 37데스하는 데드무비입니다.', '제 상대편 자이라(오멩이)가 진짜 심각하게 못해서 제가 따라다니면서 계속 죽였던 영상입니다. 제가 영상속 미포입니다.'),
    new Video('GPexqi3flNM', '자이라 37데스하는 데드무비입니다.', '제 상대편 자이라(오멩이)가 진짜 심각하게 못해서 제가 따라다니면서 계속 죽였던 영상입니다. 제가 영상속 미포입니다.')
  ];
  socket;
  listener: EventEmitter<any> = new EventEmitter();

  constructor(
    @Inject(OPAQUE_TOKEN) public appConfig: any,
    private http: Http,
    private router: Router
  ) {
    this.initSocket();
  }

  /* Socket.io
   -----------------------*/
  initSocket() {
    let options = {
      path: '/api/socket/sub'
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

  chat(event: Object) {
    let message = event[0];
    let side = event[1];
    let params = {
      text: message
    };
    if(side == 'left')
      this.socket.emit('lCreateMessage', params);
    else if(side == 'right')
      this.socket.emit('rCreateMessage', params);
  }

  /* Video
   -----------------------*/
  getBattleInfo(): Promise<any> {
    return this.http.get(this.appConfig.apiEndpoint+'/match').toPromise().then(response => {
      return response.json().data[0];
    });
    //return this.videos;
  }

  /**
   * 비디오 좋아요
   * @date 2017-02-25
   * @author 김진혁
   */
  likeMatch (lId: string, rId: string, which: number): Promise<Object> {
    let token;
    token = localStorage.getItem('tokens');
    if (!token) {
      alert('로그인이 필요합니다.');
      this.router.navigate(['/auth']);
      return;
    }
    let headers = new Headers({'Content-Type': 'application/json', 'x-auth': token});
    let options = new RequestOptions({headers: headers});
    let data = {
      isLike: 1,
      videos: {
        lId: lId,
        rId: rId,
        which: which
      }
    };
    return this.http.put(`${this.appConfig.apiEndpoint}/match/likes`, data, options)
      .toPromise()
      .then(response => {
        return response.json();
      });
  }
}