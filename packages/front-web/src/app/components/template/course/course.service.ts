import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../course.model';
import { Observable } from 'rxjs';
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

  showMessage(msg: string): void {
    this.appServices.showSnackBarMessage(msg)
  }

  postCourseAsync(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.appServices.BASE_URL}/cursos`, course)
  }

  getCoursesAsync(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.appServices.BASE_URL}/cursos`)
  }

  getCourseByIdAsync(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.appServices.BASE_URL}/cursos/${id}`)
  }

  updateCourseAsync(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.appServices.BASE_URL}/cursos/${course.id}`, course)
  }

  deleteCourseByIdAsync(id: string): Observable<Course> {
    return this.http.delete<Course>(`${this.appServices.BASE_URL}/cursos/${id}`)
  }
}
