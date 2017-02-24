import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {}
    ngOnInit () {
        // 자동 로그인 Check
        this.authService.getUserInfo();
    }
}
