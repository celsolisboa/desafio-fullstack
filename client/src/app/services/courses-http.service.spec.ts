import { TestBed } from '@angular/core/testing';

import { CoursesHttpService } from './courses-http.service';

describe('CoursesHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursesHttpService = TestBed.get(CoursesHttpService);
    expect(service).toBeTruthy();
  });
});
