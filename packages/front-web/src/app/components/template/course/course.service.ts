import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../course.model';
import { Observable } from 'rxjs';
import { AppServicesService } from 'src/app/app-services.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private appServices: AppServicesService) { }

  showMessage(msg: string): void {
    this.appServices.showSnackBarMessage(msg)
  }

  postCourseAsync(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.appServices.BASE_URL}/cursos`, course)
  }

  getCoursesAsync(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.appServices.BASE_URL}/cursos`)
  }
}
