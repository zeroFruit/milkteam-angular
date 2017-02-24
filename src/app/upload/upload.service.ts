import { Injectable, Inject } from "@angular/core";
import { OPAQUE_TOKEN } from '../app.config';
import { Video } from "../modal/video.model";
import { Headers, RequestOptions, Http } from "@angular/http";
declare var $: any;

@Injectable()
export class UploadService {
  constructor(
    @Inject(OPAQUE_TOKEN) public appConfig: any,
    private http: Http
    ) {
  }

  /**
   * 비디오 등록 함수
   */
  upload(video: Video) {
    if(video.videoId == '') {
      console.log('need parse video id from url');
    }
    const body = JSON.stringify({video: video});
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth': localStorage.getItem('tokens')
    });

    const options = new RequestOptions({headers: headers});
    return this.http.post(`${this.appConfig.apiEndpoint}/video`, body, options).toPromise()
      .then(response => response.json());
  }

  
}

// $(".title_input").change(){
//   var txt= $('.title_input').text();
//   alert(txt);
// };
