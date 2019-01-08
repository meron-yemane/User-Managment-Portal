import { TestBed } from '@angular/core/testing';

import { EditUserService } from './edit-user.service';
import { HttpClientModule } from '@angular/common/http';

describe('EditUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: EditUserService = TestBed.get(EditUserService);
    expect(service).toBeTruthy();
  });
});
