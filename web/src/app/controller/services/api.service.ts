import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
  
    constructor(private _http:HttpClient) { }
  
    apiUrlCurso = 'http://localhost:5432/curso';
    apiUrlProfessor = 'http://localhost:5432/professor';
    apiUrlSala = 'http://localhost:5432/sala';
    apiUrlCreate = 'http://localhost:5432/curso/novo-curso';
    apiUrlLogin = 'http://localhost:5432/login';
  
    loadById(id:any):Observable<any>
    {
      let ids = id;
      return this._http.get(`${this.apiUrlCurso}/${ids}`); 
    }
    updateData(id:any, data:any):Observable<any>
    {
      let ids = id;
      return this._http.put(`${this.apiUrlCurso}/${ids}`, data)
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
  