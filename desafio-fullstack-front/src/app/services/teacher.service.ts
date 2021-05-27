import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<Teacher[]> {
    return this.http.get<Teacher[]>(`${environment.baseUrl}/teacher`).toPromise()
  }

}
