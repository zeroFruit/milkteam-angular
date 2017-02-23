import { Component } from '@angular/core';

@Component({
    selector: 'mypage',
    templateUrl: 'mypage.component.html',
    styleUrls: ['../app.component.scss', 'mypage.component.css']
})
export class MypageComponent {



}

// jquery 어떻게 쓰지...

// $(document).ready(function(){ var fileTarget = $('.profile_search .upload-hidden');
//   fileTarget.on('change', function(){ // 값이 변경되면
//   if(window.FileReader){
//     // modern browser
//     var filename = $(this)[0].files[0].name; } else { // old IE
//       var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
//     }
//
//     // 추출한 파일명 삽입
//     $(this).siblings('.file_address').val(filename);
//   });
// });
