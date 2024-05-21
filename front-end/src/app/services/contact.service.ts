import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private _http: HttpClient) {}

  newContact(body: any): Observable<any> {
    return this._http.post<any>(`http://localhost:8080/contact`, body);
  }
}
