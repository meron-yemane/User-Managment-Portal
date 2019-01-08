import { TestBed } from '@angular/core/testing';

import { EditRoleService } from './edit-role.service';
import { HttpClientModule } from '@angular/common/http';

describe('EditRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: EditRoleService = TestBed.get(EditRoleService);
    expect(service).toBeTruthy();
  });
});
