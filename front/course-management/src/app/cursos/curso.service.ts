import { Injectable } from '@angular/core';
import { SubscribableOrPromise, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Curso } from './curso.model';
import { CursoDto } from './cursoDto.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  private defaultUrl = environment.urlEndPoint + "/cursos"

  public create(curso: CursoDto): Observable<any> {
    return this.http.post(this.defaultUrl, curso)
  }

  public getAll(): Observable<Array<Curso>> {
    return this.http.get<Array<Curso>>(this.defaultUrl)
  }

  public getById(id: number): Observable<Curso> {
    return this.http.get<Curso>(this.defaultUrl + `/${id}`)
  }

  public update(curso: CursoDto): Observable<any> {
    return this.http.put(this.defaultUrl + `/${curso.id}`, curso)
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.defaultUrl + `/${id}`)
  }
}
