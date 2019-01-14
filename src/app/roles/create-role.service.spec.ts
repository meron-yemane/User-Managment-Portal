import { TestBed } from '@angular/core/testing';

import { CreateRoleService } from './create-role.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Role } from 'models/role';

describe('CreateRoleService', () => {
  let service: CreateRoleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreateRoleService]
    });
    service = TestBed.get(CreateRoleService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<Role>', () => {
    const exampleRole: Role = {
      'name': 'Admin',
      'permissions': [
        'ReadRoles',
        'UpdateRole',
        'UnarchiveUser',
        'DeleteUser',
        'DeleteRole'
      ],
      'isActive': 'true',
      'id': 10
    };

    service.createRole(exampleRole).subscribe(role => {
      expect(role).toEqual(exampleRole);
    });

    const req = httpMock.expectOne(`${service.apiUrl}`);
    expect(req.request.method).toBe('POST');
    req.flush(exampleRole);
  });

  it('should be created', () => {
    const service1: CreateRoleService = TestBed.get(CreateRoleService);
    expect(service1).toBeTruthy();
  });
});
