import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'models/user';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    console.log('creating user');
    console.log(user);
    return this.http.post<User>(`${this.apiUrl}`, user, this.httpOptions);
  }

}
