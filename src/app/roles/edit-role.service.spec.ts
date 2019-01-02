import { TestBed } from '@angular/core/testing';

import { EditRoleService } from './edit-role.service';

describe('EditRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditRoleService = TestBed.get(EditRoleService);
    expect(service).toBeTruthy();
  });
});
