import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalAPI } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any> {
    return this.http.get(`${LocalAPI}/cursos/listar`);
  }

  deleteCourse(id): Observable<any> {
    return this.http.delete(`${LocalAPI}/cursos/deletar/${id}`)
  }

  createCourse(body): Observable<any> {
    return this.http.post(`${LocalAPI}/cursos/cadastrar`, body)
  }

  getTeacher(): Observable<any> {
    return this.http.get(`${LocalAPI}/professores/listar`);
  }

  getRooms(): Observable<any> {
    return this.http.get(`${LocalAPI}/salas/listar`);
  }
}
