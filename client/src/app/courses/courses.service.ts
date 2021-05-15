import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { CoursesHttpService } from '../services/courses-http.service';

@Injectable()
export class CoursesService implements Resolve<any> {
  constructor(
    private coursesHttpService: CoursesHttpService
  ) { }

  resolve(): Observable<any> {
    return this.search();
  }

  delete(id): Observable<any> {
    return this.coursesHttpService.delete(id);
  }

  search(): Observable<any> {
    return this.coursesHttpService.search();
  }
}
