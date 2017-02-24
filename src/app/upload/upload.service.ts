import { Injectable, Inject } from "@angular/core";
import { OPAQUE_TOKEN } from '../app.config';
import { Video } from "../modal/video.model";
import { Headers, RequestOptions, Http } from "@angular/http";

@Injectable()
export class UploadService {
  constructor(
    @Inject(OPAQUE_TOKEN) public appConfig: any,
    private http: Http
    ) {
  }

  upload(video: Video) {
    console.log("try upload video");
    if(video.videoId == '') {
      console.log('need parse video id from url');
    }
    const body = JSON.stringify({video: video});
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Expose-Headers': 'x-auth',
      'x-auth': localStorage.getItem('tokens')
    });

    const options = new RequestOptions({headers: headers});
    this.http.post(`${this.appConfig.apiEndpoint}/video`, body, options).toPromise()
      .then(response => {
        response.json();
        console.log(response.json());
      });
  }
}