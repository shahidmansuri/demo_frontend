import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from
  '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';
@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
    private myRoute: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggedin()) {
      return true;
    } else {
      this.myRoute.navigate(["/"]);
      return false;
    }
  }

}
