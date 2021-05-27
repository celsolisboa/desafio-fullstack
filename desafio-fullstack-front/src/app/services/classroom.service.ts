import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Classroom } from '../models/classroom.model';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<Classroom[]> {
    return this.http.get<Classroom[]>(`${environment.baseUrl}/classroom`).toPromise()
  }

}
