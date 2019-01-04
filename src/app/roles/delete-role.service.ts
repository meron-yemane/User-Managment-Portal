import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeleteRoleService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  apiUrl = 'http://localhost:3000/roles/';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  deleteRole(roleId: number) {
    return this.http.put(`${this.apiUrl}` + roleId, {
      'isActive': 'false'
    });
  }
}
