import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnDestroy {
  private ngUnsubscribe = new Subject();
  courses = [];

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly coursesService: CoursesService
  ) {
    this.activatedRoute.data.subscribe(result => {
      this.courses = result.courses;
    }, () => {
      this.router.navigate(['login']);
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  goToAdd() {
    this.router.navigate(['detalhes']);
  }

  delete(id) {
    this.coursesService.delete(id).pipe(
      takeUntil(this.ngUnsubscribe),
      tap(() => {
        this.reloadCourses();
      })
    ).subscribe();
  }

  private reloadCourses() {
    return this.coursesService.search().pipe(
      tap((data) => (this.courses = data))
    ).subscribe();
  }

  edit(id) {
    this.router.navigate(['detalhes', id]);
  }

}
