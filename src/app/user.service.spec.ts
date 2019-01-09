import { TestBed, getTestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject } from '@angular/core';
import { User } from 'models/user';

describe('UserService', () => {
  let injector: TestBed;
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<User[]>', () => {
    const exampleUsers = [
        {
        'name': 'Mark Delaney',
        'email': 'mdelaney@augmedix.com',
        'login': 'mojombo',
        'roles': [
          'Admin'
        ],
        'isActive': 'true',
        'id': 0
      },
      {
        'name': 'Meron Yemane',
        'email': 'myemane@augmedix.com',
        'login': 'defunkt',
        'roles': [
          'Observer',
          'Admin',
          'Creator'
        ],
        'isActive': 'true',
        'id': 1
      }
    ];
    service.getUsers().subscribe(users => {
      expect(users).toEqual(exampleUsers);
    });

    const req = httpMock.expectOne(`${service.apiUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(exampleUsers);
  });

});
