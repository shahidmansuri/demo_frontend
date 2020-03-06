import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'http://127.0.0.1:8000/api/v1/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor(private http: HttpClient) { }

  get(endpoint: string, params: any = {}): Observable<any>{
    return this.http.get(this.apiURL+endpoint, params);
  }

  post(endpoint: string, params: any = {}): Observable<any>{
    return this.http.post(this.apiURL+endpoint, params);
  }

}
