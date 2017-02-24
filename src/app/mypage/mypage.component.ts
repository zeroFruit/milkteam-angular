import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
declare var $: any;

@Component({
    selector: 'mypage',
    templateUrl: 'mypage.component.html',
    styleUrls: ['../app.component.scss', 'mypage.component.css']
})
export class MypageComponent implements OnInit {
  displayName: string;
  profile: FileList;
  videos: Object[];
  constructor (
    private authService: AuthService
  ) {
    
  }

  onSave () {
    // 프로필 존재시 업로드
    if (this.profile.length > 0) {
      this.onSaveProfile();
    }

    if (this.displayName) {
      this.onSaveDisplayName();
    }
  }

  /**
   * 닉네임 저장
   */
  onSaveDisplayName () {
    this.authService.updateDisplayName(this.displayName);
  }

  /**
   * profile 사진 저장
   */
  onSaveProfile () {
    this.authService.updateProfile(this.profile[0]);
  }

  /**
   * 파일 변경감지
   */
  getFiles (event) {
    this.profile = event.target.files;
  }

  /**
   * 비디오 불러오기
   */
  getVideos () {
    this.authService.getVideo()
      .then(videos => {
        this.videos = videos
      });
  }

  ngOnInit () {
    let fileTarget = $('.profile_search .upload-hidden');
    this.getVideos();
    fileTarget.on('change', function(){ // 값이 변경되면
      //if(window.FileReader){
        // modern browser
        //let filename = $(this)[0].files[0].name; } else { // old IE
          let filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
      //  }

        // 추출한 파일명 삽입
        $(this).siblings('.file_address').val(filename);
      });
  }

}