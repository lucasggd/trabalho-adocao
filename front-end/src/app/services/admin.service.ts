import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _http: HttpClient) {}

  findAll(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this._http.get<any>(`http://localhost:8080/admin/animal/all`, {
      headers: headers,
    });
  }

  findAllContact(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this._http.get<any>(`http://localhost:8080/admin/contact/all`, {
      headers: headers,
    });
  }

  save(body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this._http.post<any>(
      `http://localhost:8080/admin/animal/new`,
      body,
      {
        headers: headers,
      }
    );
  }

  update(body: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this._http.put<any>(`http://localhost:8080/admin/animal`, body, {
      headers: headers,
    });
  }

  delete(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this._http.delete<any>(
      `http://localhost:8080/admin/animal/delete/${id}`,
      {
        headers: headers,
      }
    );
  }

  deleteContact(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this._http.delete<any>(`http://localhost:8080/admin/contact/${id}`, {
      headers: headers,
    });
  }
}
