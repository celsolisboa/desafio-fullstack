import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';

import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  courseForm: FormGroup;
  course: any;
  teachersList: string[] = ['Afonso', 'Leandro', 'Maria', 'Gabriela'];
  roomsList: string[] = ['B1', 'B2', 'G1', 'G2', 'H1', 'H2'];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly detailsService: DetailsService
  ) {
    this.activatedRoute.data.pipe(
      tap(result => {
        this.course = result.course;
      }),
      catchError(() => {
        return this.router.navigate(['cursos']);
      }),
      takeUntil(this.ngUnsubscribe)
    ).subscribe();
  }

  ngOnInit() {
    if (this.course) {
      this.courseForm = this.formBuilder.group({
        name: [this.course.name, [Validators.required]],
        teachers: [this.course.teachers.split(','), [Validators.required]],
        rooms: [this.course.rooms.split(','), [Validators.required]],
        start_at: [this.course.start_at, [Validators.required]],
        end_at: [this.course.end_at, [Validators.required]]
      });
    } else {
      this.courseForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        teachers: ['', [Validators.required]],
        rooms: ['', [Validators.required]],
        start_at: ['', [Validators.required]],
        end_at: ['', [Validators.required]]
      });
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  save() {
    const course = this.courseForm.value;
    course.teachers = course.teachers.toString();
    course.rooms = course.rooms.toString();
    if (this.course) {
      this.detailsService.update(this.course.id, course).pipe(
        tap(() => {
          this.router.navigate(['cursos']);
        }),
        catchError(() => {
          return this.router.navigate(['cursos']);
        }),
        takeUntil(this.ngUnsubscribe)
      ).subscribe();
    } else {
      this.detailsService.save(course).pipe(
        tap(() => {
          this.router.navigate(['cursos']);
        }),
        catchError(() => {
          return this.router.navigate(['cursos']);
        }),
        takeUntil(this.ngUnsubscribe)
      ).subscribe();
    }
  }
}
