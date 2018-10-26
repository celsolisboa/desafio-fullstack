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
        deleteData: 'https://ew12lbci58.execute-api.us-east-1.amazonaws.com/DEV/deletecurso',
        getProfessor: 'https://ew12lbci58.execute-api.us-east-1.amazonaws.com/DEV/getprofessor'
    };
    constructor(public http: HttpClient) { }
    getData() {
        return this.http.get(this.Api.getData).toPromise().then((res: CursoModel[]) => {
            this.Dados = res;
            console.log('LInha 21', res);

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
        const jsonBody = JSON.stringify(body);
        return this.http.post(this.Api.saveData, jsonBody)
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
        const jsonBody = JSON.stringify(body);
        return this.http.post(this.Api.editData, jsonBody)
            .toPromise().then((res) => {
                console.log(res);
                return res;
            });
    }
    DeleteData(key) {
        const body = {
            id: key
        };
        const jsonBody = JSON.stringify(body);
        return this.http.post(this.Api.deleteData, jsonBody).toPromise().then((res) => {
            console.log(res);
            return res;
        });
    }
    getProfessor() {
        return this.http.get(this.Api.getProfessor).toPromise().then((res) => {
            return res;
        });
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
