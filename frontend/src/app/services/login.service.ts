import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TeacherLogin } from '../interfaces/Teacher';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/login`;

  constructor(private http: HttpClient) { }

  createLogin(teacher: TeacherLogin): Observable<TeacherLogin> {      
    return this.http.post<TeacherLogin>(this.apiUrl, teacher)
  }
}
