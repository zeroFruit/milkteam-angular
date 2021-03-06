/**
 * Created by hackurity on 2017. 2. 21..
 */
import { Component } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['../../app.component.scss', '../auth.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  login(email: string, password: string) {
    this.authService.login(email, password);
  }
}
