/**
 * Created by hackurity on 2017. 2. 17..
 */
import { Component } from '@angular/core';


@Component({
  selector   : 'random-chatting',
  templateUrl: 'random-chatting.component.html',
  styleUrls  : ['random-chatting.component.scss']
})
export class RandomChattingComponent {
  chattings = [
    {
      'nickname': 'Hackurity',
      'message' : '우왕ㅇ우와오아어아ㅜ아ㅗㅇ아우아ㅗㅇ우ㅏ오우아ㅗ우아ㅗ아ㅜ아옹',
      'picture' : '/public/images/bitmap.png'
    }, {
      'nickname': 'Hackurity',
      'message' : '하히후해후아야우애애니냗이냔되ㅜㅏㄴㅇ로',
      'picture' : '/public/images/bitmap.png'
    }
  ];
}
