import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _http: HttpClient) {}

  login(body: any): Observable<any> {
    return this._http.post<any>(`http://localhost:8080/authenticate`, body);
  }
}
