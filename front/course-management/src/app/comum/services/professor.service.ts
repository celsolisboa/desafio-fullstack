import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Professor } from '../models/professor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  private defaultUrl = environment.urlEndPoint + "/professores"

  public getAll(): Observable<Array<Professor>> {
    return this.http.get<Array<Professor>>(this.defaultUrl)
  }

}
