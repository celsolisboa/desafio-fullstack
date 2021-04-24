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
    user_id: '',
    id: '',
    title: '',
    teachers: [],
    classes: [],
    start_time: '',
    end_time: '',
  }

  constructor(private http: HttpClient, private appServices: AppServicesService) { }

  setFormCourses(course: Course) {
    this.formCourse = course
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.appServices.showSnackBarMessage(msg, isError)
  }

  postCourseAsync(course: Course): Observable<Course> {
    course.user_id = this.appServices.userData.id
    return this.http.post<Course>(`${this.appServices.BASE_URL}/courses`, course).pipe(
      map(obj => obj),
      catchError(err => this.appServices.handleErrorMessage(err))
    )
  }

  getCoursesAsync(): Observable<Course[]> {
    const request = `${this.appServices.BASE_URL}/courses/${this.appServices.userData.id}`
    return this.http.get<Course[]>(request).pipe(
      map(obj => obj),
      catchError(err => this.appServices.handleErrorMessage(err))
    )
  }

  getCourseByIdAsync(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.appServices.BASE_URL}/courses/${id}`).pipe(
      map(obj => obj),
      catchError(err => this.appServices.handleErrorMessage(err))
    )
  }

  updateCourseAsync(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.appServices.BASE_URL}/courses/${course.id}`, course).pipe(
      map(obj => obj),
      catchError(err => this.appServices.handleErrorMessage(err))
    )
  }

  deleteCourseByIdAsync(id: string): Observable<Course> {
    return this.http.delete<Course>(`${this.appServices.BASE_URL}/courses/${id}`).pipe(
      map(obj => obj),
      catchError(err => this.appServices.handleErrorMessage(err))
    )
  }
}
