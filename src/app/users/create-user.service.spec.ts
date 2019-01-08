import { TestBed } from '@angular/core/testing';

import { CreateUserService } from './create-user.service';
import { HttpClientModule } from '@angular/common/http';

describe('CreateUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: CreateUserService = TestBed.get(CreateUserService);
    expect(service).toBeTruthy();
  });
});
