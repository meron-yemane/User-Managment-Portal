import { TestBed } from '@angular/core/testing';

import { DeleteRoleService } from './delete-role.service';

describe('DeleteRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteRoleService = TestBed.get(DeleteRoleService);
    expect(service).toBeTruthy();
  });
});
