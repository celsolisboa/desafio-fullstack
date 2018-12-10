import { TestBed, async, inject } from '@angular/core/testing';

import { SimpleGuardAuthGuard } from './simple-guard-auth.guard';

describe('SimpleGuardAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleGuardAuthGuard]
    });
  });

  it('should ...', inject([SimpleGuardAuthGuard], (guard: SimpleGuardAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
