import { API_CONFIG } from './../config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

@Injectable()
export class CursoService{

    constructor(public http : HttpClient){

    }

    findAll(): Observable<any[]> {
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}/cursos`);
    }
}