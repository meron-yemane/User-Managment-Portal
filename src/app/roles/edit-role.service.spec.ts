import { TestBed } from '@angular/core/testing';

import { EditRoleService } from './edit-role.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Role } from 'models/role';

describe('EditRoleService', () => {
  let service: EditRoleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [EditRoleService]
  });
    service = TestBed.get(EditRoleService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable', () => {
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

    service.editRole({
      'name': 'Administer',
      'permissions': [
        'ReadRoles',
        'UpdateRole',
        'UnarchiveUser'
      ],
      'isActive': 'true',
      'id': 10
    }, exampleRole.id).subscribe(role => {
      expect(role).toEqual({
        'name': 'Administer',
        'permissions': [
          'ReadRoles',
          'UpdateRole',
          'UnarchiveUser'
        ],
        'isActive': 'true',
        'id': 10
      });
    });

    const req = httpMock.expectOne(`${service.apiUrl}` + exampleRole.id);
    expect(req.request.method).toBe('PUT');
    req.flush({
      'name': 'Administer',
      'permissions': [
        'ReadRoles',
        'UpdateRole',
        'UnarchiveUser'
      ],
      'isActive': 'true',
      'id': 10
    });
  });

  it('should be created', () => {
    const service1: EditRoleService = TestBed.get(EditRoleService);
    expect(service1).toBeTruthy();
  });
});
