import { TestBed } from '@angular/core/testing';

import { GetPermissionsService } from './get-permissions.service';

describe('GetPermissionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPermissionsService = TestBed.get(GetPermissionsService);
    expect(service).toBeTruthy();
  });
});
