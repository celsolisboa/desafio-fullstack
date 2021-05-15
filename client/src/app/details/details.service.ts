import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { CoursesHttpService } from '../services/courses-http.service';

@Injectable()
export class DetailsService implements Resolve<any> {
  constructor(
    private coursesHttpService: CoursesHttpService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('courseId');
    return this.searchOne(id);
  }

  searchOne(id): Observable<any> {
    return this.coursesHttpService.searchOne(id);
  }

  save(data): Observable<any> {
    return this.coursesHttpService.save(data);
  }

  update(id, data): Observable<any> {
    return this.coursesHttpService.update(id, data);
  }
}
