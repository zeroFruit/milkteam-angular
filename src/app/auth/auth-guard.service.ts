import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  
  canActivate () {
    let token = localStorage.getItem('tokens');
    if (token) {
      return true;
    }
    else {
      alert('로그인이 필요합니다');
      this.router.navigate(['/auth']);
      return false;
    }
  }
}