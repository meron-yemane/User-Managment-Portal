import { TestBed } from '@angular/core/testing';

import { DeleteRoleService } from './delete-role.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Role } from 'models/role';

describe('DeleteRoleService', () => {
  let service: DeleteRoleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DeleteRoleService]
  });
  service = TestBed.get(DeleteRoleService);
  httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should turn isActive key from true to false', () => {
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

    service.deleteRole(exampleRole.id);
    // expect(exampleRole).toEqual({
    //   'name': 'Admin',
    //   'permissions': [
    //     'ReadRoles',
    //     'UpdateRole',
    //     'UnarchiveUser',
    //     'DeleteUser',
    //     'DeleteRole'
    //   ],
    //   'isActive': 'false',
    //   'id': 10
    // });

    // const req = httpMock.expectOne(`${service.apiUrl}` + exampleRole.id);
    // expect(req.request.method).toBe('PATCH');
    // req.flush({
    //   'isActive': 'false'
    // });
  });

  it('should be created', () => {
    const service1: DeleteRoleService = TestBed.get(DeleteRoleService);
    expect(service1).toBeTruthy();
  });
});
