import { Injectable } from "@angular/core";
import { Video } from "../modal/video.model";
import { Headers, RequestOptions, Http } from "@angular/http";

@Injectable()
export class UploadService {
  constructor(private http: Http) {
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
    this.http.post('http://ec2-52-79-203-90.ap-northeast-2.compute.amazonaws.com:3002/video', body, options).toPromise()
      .then(response => {
        response.json();
        console.log(response.json());
      });
  }
}