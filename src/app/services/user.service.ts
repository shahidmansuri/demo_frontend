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
export class UserService {

  constructor(public apiService: ApiService) { }

  public getUser(): Observable<any>{
    return this.apiService.get('user').pipe(map(res => {
      return res.data;
    }));
  }
}
