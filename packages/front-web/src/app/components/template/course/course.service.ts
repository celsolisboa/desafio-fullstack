import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../course.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppServicesService } from 'src/app/app-services.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  formCourse: Course = {
    id: '',
    title: '',
    teachers: [],
    classes: [],
    time: {
      init: '',
      end: ''
    }
  }

  constructor(private http: HttpClient, private appServices: AppServicesService) { }

  setFormCourses(course: Course) {
    this.formCourse = course
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.appServices.showSnackBarMessage(msg, isError)
  }

  postCourseAsync(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.appServices.BASE_URL}/cursos`, course).pipe(
      map(obj => obj),
      catchError(err => this.appServices.handleErrorMessage(err))
    )
  }

  getCoursesAsync(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.appServices.BASE_URL}/cursos`).pipe(
      map(obj => obj),
      catchError(err => this.appServices.handleErrorMessage(err))
    )
  }

  getCourseByIdAsync(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.appServices.BASE_URL}/cursos/${id}`).pipe(
      map(obj => obj),
      catchError(err => this.appServices.handleErrorMessage(err))
    )
  }

  updateCourseAsync(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.appServices.BASE_URL}/cursos/${course.id}`, course).pipe(
      map(obj => obj),
      catchError(err => this.appServices.handleErrorMessage(err))
    )
  }

  deleteCourseByIdAsync(id: string): Observable<Course> {
    return this.http.delete<Course>(`${this.appServices.BASE_URL}/cursos/${id}`).pipe(
      map(obj => obj),
      catchError(err => this.appServices.handleErrorMessage(err))
    )
  }
}
