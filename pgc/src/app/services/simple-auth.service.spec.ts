import { TestBed } from '@angular/core/testing';

import { SimpleAuthService } from './simple-auth.service';

describe('SimpleAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleAuthService = TestBed.get(SimpleAuthService);
    expect(service).toBeTruthy();
  });
});
