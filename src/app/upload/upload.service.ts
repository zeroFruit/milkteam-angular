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

  upload(video: Video) {
    console.log("try upload video");
    if(video.videoId == '') {
      console.log('need parse video id from url');
    }
    const body = JSON.stringify(video);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Expose-Headers': 'x-auth',
      'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGFiYzhiZjViNTNkMDNmZTllMzRiMTgiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNDg3Nzc0NzMxfQ.k5z0_jK8DCAhmOErlM5U2hQE1PmqKeL4r322u7Ej1As'
    });

    const options = new RequestOptions({headers: headers});
    this.http.post(`${this.appConfig.apiEndpoint}/video`, body, options).toPromise()
      .then(response => {
        response.json();
        console.log(response.json());
      });
  }

  
}

// $(".title_input").change(){
//   var txt= $('.title_input').text();
//   alert(txt);
// };
