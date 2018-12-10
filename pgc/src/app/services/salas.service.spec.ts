import { TestBed } from '@angular/core/testing';

import { SalasService } from './salas.service';

describe('SalasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalasService = TestBed.get(SalasService);
    expect(service).toBeTruthy();
  });
});
