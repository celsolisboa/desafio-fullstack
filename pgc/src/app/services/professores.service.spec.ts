import { TestBed } from '@angular/core/testing';

import { ProfessoresService } from './professores.service';

describe('ProfessoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfessoresService = TestBed.get(ProfessoresService);
    expect(service).toBeTruthy();
  });
});
