import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icurso } from './interface/Icursos';
import { IProfessor } from './interface/IProfessor';
import { ISala } from './interface/ISala';
import { ICursoCreate } from './interface/Icurso';
import { ICursoEdit } from './interface/ICursoEditar';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private httpClient: HttpClient) { }


  criarCurso(nome_curso: string, inicio: string, fim: string ,professor_id: number, sala_id: number ){
    return this.httpClient.post<ICursoCreate>('api/cursos', [nome_curso,inicio,fim,sala_id,professor_id])
  }


  listarCursos(){
    return this.httpClient.get<Icurso[]>('api/cursos');
  }


  listarCursoPorId(id: number){
    return this.httpClient.get<ICursoEdit>(`api/cursos/${id}`);
  }



  deletarCurso(id: number){
    return this.httpClient.delete(`api/cursos/${id}`)
  }


  listarProfessores(){
    return this.httpClient.get<IProfessor[]>('api/professores')
  }

  listarSalas(){
    return this.httpClient.get<ISala[]>('api/salas')
  }


}
