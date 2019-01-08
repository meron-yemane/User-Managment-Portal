import { TestBed } from '@angular/core/testing';

import { GetPermissionsService } from './get-permissions.service';
import { HttpClientModule } from '@angular/common/http';

describe('GetPermissionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: GetPermissionsService = TestBed.get(GetPermissionsService);
    expect(service).toBeTruthy();
  });
});
