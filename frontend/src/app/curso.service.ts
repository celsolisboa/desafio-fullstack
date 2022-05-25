import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icurso } from './Icursos';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private httpClient: HttpClient) { }

  listarCursos(){
    return this.httpClient.get<Icurso[]>('api/cursos');
  }



  deletarCurso(id: number){
      return this.httpClient.delete(`api/cursos/${id}`)
  }
}
