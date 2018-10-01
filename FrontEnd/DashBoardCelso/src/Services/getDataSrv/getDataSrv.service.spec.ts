import { TestBed, inject } from '@angular/core/testing';

import { GetDataService } from './get-data.service';

describe('GetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataService]
    });
  });

  it('should be created', inject([GetDataService], (service: GetDataService) => {
    expect(service).toBeTruthy();
  }));
});
