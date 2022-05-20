import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Course } from '../interfaces/Course';

@Injectable({
  providedIn: 'root'
})
export class GetCoursesService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/courses`;

  constructor(private http: HttpClient) { }

  // getAllCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>(this.apiUrl) 
  // }
}
