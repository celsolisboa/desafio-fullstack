import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  apiUrlCurso = 'http://localhost:8080/curso';
  apiUrlProfessor = 'http://localhost:8080/professor';
  apiUrlSala = 'http://localhost:8080/sala';
  apiUrlCreate = 'http://localhost:8080/curso/novo-curso';
  apiUrlLogin = 'http://localhost:8080/login';

  loadById(id:any){
    return this._http.get(`${this.apiUrlCurso}/${id}`).pipe(take(1));
  }

  getAllDataCurso():Observable<any>
  {
    return this._http.get(`${this.apiUrlCurso}`);
  }

  GetByIdProfessorData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrlProfessor}/${ids}`)
  }

  GetByIdSalaData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrlSala}/${ids}`)
  }

  getAllDataProfessor():Observable<any>
  {
    return this._http.get(`${this.apiUrlProfessor}`);
  }

  getAllDataSala():Observable<any>
  {
    return this._http.get(`${this.apiUrlSala}`);
  }

  createData(data:any):Observable<any>
  {
    console.log(data, 'createapi=>');
    
    return this._http.post(`${this.apiUrlCreate}`, data)
  }

  login(dataF:any):Observable<any>
  {
    return this._http.post(`${this.apiUrlLogin}`, dataF)
  }


  deleteData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrlCurso}/${ids}`)
  }

}
