import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  apiUrl = 'http://localhost:3000/users/';

  constructor(
    private http: HttpClient
  ) { }

  editUser(user: Object, userId: number): Observable<Object> {
    return this.http.put<Object>(`${this.apiUrl}` + userId, user, this.httpOptions);
  }

}
