import { TestBed } from '@angular/core/testing';

import { CreateUserService } from './create-user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from 'models/user';

describe('CreateUserService', () => {
  let service: CreateUserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreateUserService]
    });
    service = TestBed.get(CreateUserService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<User>', () => {
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

    service.createUser(exampleUser).subscribe(user => {
      expect(user).toEqual(exampleUser);
    });

    const req = httpMock.expectOne(`${service.apiUrl}`);
    expect(req.request.method).toBe('POST');
    req.flush(exampleUser);
  });
});
