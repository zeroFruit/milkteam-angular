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
  upload(video: Video): Promise<Object> {
    let token;
    token = localStorage.getItem('tokens');
    const body = JSON.stringify(video);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth': token
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
