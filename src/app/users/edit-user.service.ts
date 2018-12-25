import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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

editUser(userId: number, user: Object) {
  console.log(userId);
  console.log(user);
}

}
