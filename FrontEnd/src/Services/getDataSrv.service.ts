import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoModel } from './../Models/cursoModel';
import { Observable } from 'rxjs';

@Injectable()
export class GetDataService {
    Dados: CursoModel[];
    Arr_professor = [];
    Api = {
        getData: 'http://localhost:3000/cursos/listar',
        saveData: 'http://localhost:3000/cursos/criar',
        editData: 'http://localhost:3000/cursos/editar'
    }
    constructor(public http: HttpClient) { }


    getData() {
        return this.http.get(this.Api.getData).toPromise().then((res: CursoModel[]) => {
            this.Dados = res;
            /* console.log(res)this.selectedData */
            const resultado = res;
            return resultado;
        });
    }

    saveData(item: CursoModel) {
        console.log(item);
        return this.http.get(this.Api.saveData +
            '/id/ ' + item.id +
            '/sala/' + item.sala +
            '/professor/' + item.professor +
            '/materia/' + item.materia +
            '/horaInicial/' + item.horaInicial +
            '/horaFinal/' + item.horaFinal)
            .toPromise().then((res) => {
                console.log(res);
                return res;
            });
    }
    editData(item) {
        return this.http.get(this.Api.editData +
            '/id/ ' + item.id +
            '/sala/' + item.sala +
            '/professor/' + item.professor +
            '/materia/' + item.materia +
            '/horaInicial/' + item.horaInicial +
            '/horaFinal/' + item.horaFinal)
            .toPromise().then((res) => {
                console.log(res);
                return res;
            });
    }
    DeleteData() {

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
