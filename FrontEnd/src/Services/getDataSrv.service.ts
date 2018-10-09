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
      /* console.log(res)this.selectedData */
      this.teste()
      const resultado = res;
      return resultado;
    });
  }

  teste() {
    this.http.post('http://localhost:3000/cursos/criar/id/1250/sala/1080/professor/Horacio/materia/Artes/horaInicial/09:50/horaFinal/07:00').subscribe((res) => {
      console.log(res);
      return res;
      /*   this.Dados = res;
        console.log(res)
        const resultado = res;
        return resultado; */
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
  getSalas() {
    const Arr_Salas = [];
    for (let i = 0; i < this.Dados.length; i++) {
      const element = this.Dados[i];
      if (Arr_Salas.indexOf(element.sala) <= -1) {
        Arr_Salas.push(element.sala);
      } else {
        console.log('N adiciona');
      }
    }
    return Arr_Salas;
  }


}
