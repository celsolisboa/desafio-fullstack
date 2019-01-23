import { TestBed } from '@angular/core/testing';

import { CursoServiceService } from './curso-service.service';

describe('CursoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursoServiceService = TestBed.get(CursoServiceService);
    expect(service).toBeTruthy();
  });
});
