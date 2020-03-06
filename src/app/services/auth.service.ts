import { Injectable } from '@angular/core';
import { Observable, Subject, from, throwError, of } from 'rxjs';
import { User } from '../Models/user.model';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { MessageService } from './message.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public apiService: ApiService, public msgService: MessageService, public router: Router ) { }

  login(user: User): Observable<any> {
    return this.apiService.post('login', user).pipe(map((res) => {
      if (res.status == 200) {
        this.msgService.success('Login Successful');
        this.setSession(_.find(res.data, 'access_token'));
        return res.data;
      }
      else {
        this.msgService.error('Invalid email or password');
        this.logout();
        throwError('invalid');
      }
    }));
  }

  register(user: User): Observable<any> {
    return this.apiService.post('register', user).pipe(map((res) => {
      if (res.status == 200) {
        this.msgService.success('Register Successful');
        this.setSession(_.find(res.data, 'access_token'));
        return res.data;
      }
      else {
        this.msgService.error('Email is already taken');
        throwError('invalid');
      }
    }));
  }

  setSession(data: any): void {
    let expiry = moment().add(data.expires_in, 'second');
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('expiry', expiry.toString());
  }

  isLoggedin(): boolean {
    if(localStorage.getItem('token')){
      if(moment().isBefore(this.getExpiration())){
        return true;
      }
      this.logout();
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expiry');
    this.redirectToLogin();
  }

  getExpiration(): any{
    const expiration = localStorage.getItem('expiry');
    return moment(expiration);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  redirectToLogin(): void{
    this.router.navigate(['/']);
  }
}
