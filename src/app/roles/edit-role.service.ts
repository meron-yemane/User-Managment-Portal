import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditRoleService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  apiUrl = 'http://localhost:3000/roles/';

  constructor(
    private http: HttpClient
  ) { }

  editRole(role: Object, roleId: string): Observable<Object> {
    return this.http.put<Object>(`${this.apiUrl}` + roleId, role, this.httpOptions);
  }
}
