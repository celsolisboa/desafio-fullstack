import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoModel } from './../Models/cursoModel';
import { Observable } from 'rxjs';

@Injectable()
export class GetDataService {
    Dados: CursoModel[];
    Arr_professor = [];
    Api = {
        getData: 'https://ew12lbci58.execute-api.us-east-1.amazonaws.com/DEV/getcurso',
        saveData: 'https://ew12lbci58.execute-api.us-east-1.amazonaws.com/DEV/writecurso',
        editData: 'https://ew12lbci58.execute-api.us-east-1.amazonaws.com/DEV/updatecurso',
        deleteData: 'https://ew12lbci58.execute-api.us-east-1.amazonaws.com/DEV/deletecurso'
    };
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
        const body = {
            id: item.id,
            sala: item.sala,
            professor: item.professor,
            materia: item.materia,
            horaInicial: item.horaInicial,
            horaFinal: item.horaFinal,
            editar: false
        };
        return this.http.post(this.Api.saveData, body)
            .toPromise().then((res) => {
                console.log(res);
                return res;
            });
    }
    editData(item) {
        const body = {
            id: item.id,
            sala: item.sala,
            professor: item.professor,
            materia: item.materia,
            horaInicial: item.horaInicial,
            horaFinal: item.horaFinal,
            editar: true
        };

        return this.http.post(this.Api.editData, body)
            .toPromise().then((res) => {
                console.log(res);
                return res;
            });
    }
    DeleteData(id) {
        const body = id;
this.http.delete(this.Api.deleteData, body).pipe((map))
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
