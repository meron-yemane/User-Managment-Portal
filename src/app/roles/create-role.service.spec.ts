import { TestBed } from '@angular/core/testing';

import { CreateRoleService } from './create-role.service';

describe('CreateRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateRoleService = TestBed.get(CreateRoleService);
    expect(service).toBeTruthy();
  });
});
