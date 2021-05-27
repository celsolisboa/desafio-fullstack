import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Course[]>(`${environment.baseUrl}/course`).toPromise()
  }

  getById(id) {
    return this.http.get<Course>(`${environment.baseUrl}/course/${id}`).toPromise()
  }

  update(id, course) {
    return this.http.put(`${environment.baseUrl}/course/${id}`, { ...course }).toPromise();
  }

  save(course) {
    return this.http.post(`${environment.baseUrl}/course`, { ...course }).toPromise()
  }

  delete(id) {
    return this.http.delete(`${environment.baseUrl}/course/${id}`).toPromise()
  }
}
