import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoModel } from './../Models/cursoModel';
import { Observable } from 'rxjs';

@Injectable()
export class GetDataService {
  Dados: CursoModel[];
  Arr_professor = [];
  constructor(public http: HttpClient) { }


  getData() {
    return this.http.get('http://localhost:3000/cursos/listar').toPromise().then((res: CursoModel[]) => {
      this.Dados = res;
      const resultado = res;
      return resultado;
    });
  }


  getProfessor() {
     for (let i = 0; i < this.Dados.length; i++) {
      const element = this.Dados[i];
      if (this.Arr_professor.indexOf(element.professor) <= -1) {
        this.Arr_professor.push(element.professor);
      } else {
        console.log('N adiciona');
      }
      /* console.log('resultado do array de professores', this.Arr_professor); */

    }
    return this.Arr_professor;
  }
}
