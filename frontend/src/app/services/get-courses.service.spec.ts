import { TestBed } from '@angular/core/testing';

import { GetCoursesService } from './get-courses.service';

describe('GetCoursesService', () => {
  let service: GetCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
