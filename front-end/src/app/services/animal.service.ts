import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private _http: HttpClient) {}

  findAll(): Observable<any> {
    return this._http.get<any>(`http://localhost:8080/animal`);
  }
}
