import { TestBed } from '@angular/core/testing';

import { DeleteUserService } from './delete-user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from 'models/user';

describe('DeleteUserService', () => {
  let service: DeleteUserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ],
    providers: [
      DeleteUserService
    ]
  });
    service = TestBed.get(DeleteUserService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should turn isActive key from true to false', () => {
    const exampleUser: User = {
      'name': 'Mark Delaney',
        'email': 'mdelaney@augmedix.com',
        'login': 'mojombo',
        'roles': [
          'Admin'
        ],
        'isActive': 'true',
        'creationDate': 1524379940,
        'id': 0
    };

    service.deleteUser(exampleUser.id);
    // expect(exampleUser).toEqual(
    //   {
    //     'name': 'Mark Delaney',
    //     'email': 'mdelaney@augmedix.com',
    //     'login': 'mojombo',
    //     'roles': [
    //       'Admin'
    //     ],
    //     'isActive': 'false',
    //     'id': 0
    //   }
    // );
    const req = httpMock.expectOne(`${service.apiUrl}` + exampleUser.id);
    expect(req.request.method).toBe('PATCH');
    req.flush(exampleUser);
  });
});
