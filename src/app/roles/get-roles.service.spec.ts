import { TestBed } from '@angular/core/testing';

import { GetRolesService } from './get-roles.service';
import { HttpClientModule } from '@angular/common/http';

describe('GetRolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: GetRolesService = TestBed.get(GetRolesService);
    expect(service).toBeTruthy();
  });
});
