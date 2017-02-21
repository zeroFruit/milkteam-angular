import { Component } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'join',
  templateUrl: 'join.component.html',
  styleUrls: ['join.component.scss']
})
export class JoinComponent {
  constructor(private authService: AuthService) {}
  join(email: string, password: string, password2: string, nickname: string) {
    if(password != password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    this.authService.join(email, password, nickname);

  }
}
