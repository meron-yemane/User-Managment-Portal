import { TestBed } from '@angular/core/testing';

import { DeleteUserService } from './delete-user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DeleteUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: DeleteUserService = TestBed.get(DeleteUserService);
    expect(service).toBeTruthy();
  });
});
