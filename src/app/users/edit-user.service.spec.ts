import { TestBed } from '@angular/core/testing';

import { EditUserService } from './edit-user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from 'models/user';

describe('EditUserService', () => {
  let service: EditUserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      EditUserService
    ]
  });
    service = TestBed.get(EditUserService);
    httpMock = TestBed.get(HttpTestingController);
  });
    afterEach(() => {
      httpMock.verify();
  });

  it('should return an Observable', () => {
    const exampleUser: User = {
      'name': 'Mark Delaney',
      'email': 'mdelaney@augmedix.com',
      'login': 'mojombo',
      'roles': [
        'Admin'
      ],
      'isActive': 'true',
      'id': 0
    };

    service.editUser({
      'name': 'Mark Delaney',
      'email': 'mdelaneyaltered@augmedix.com',
      'login': 'mojombo',
      'roles': [
        'Admin',
        'Creator'
      ],
      'isActive': 'true',
      'id': 0
    }, exampleUser.id).subscribe(user => {
      expect(user).toEqual({
        'name': 'Mark Delaney',
        'email': 'mdelaneyaltered@augmedix.com',
        'login': 'mojombo',
        'roles': [
          'Admin',
          'Creator'
        ],
        'isActive': 'true',
        'id': 0
      });
    });

    const req = httpMock.expectOne(`${service.apiUrl}` + exampleUser.id);
    expect(req.request.method).toBe('PUT');
    req.flush({
      'name': 'Mark Delaney',
      'email': 'mdelaneyaltered@augmedix.com',
      'login': 'mojombo',
      'roles': [
        'Admin',
        'Creator'
      ],
      'isActive': 'true',
      'id': 0
    });
  });

  it('should be created', () => {
    const service1: EditUserService = TestBed.get(EditUserService);
    expect(service1).toBeTruthy();
  });
});
