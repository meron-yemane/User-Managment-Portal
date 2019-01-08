import { TestBed } from '@angular/core/testing';

import { DeleteRoleService } from './delete-role.service';
import { HttpClientModule } from '@angular/common/http';

describe('DeleteRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: DeleteRoleService = TestBed.get(DeleteRoleService);
    expect(service).toBeTruthy();
  });
});
