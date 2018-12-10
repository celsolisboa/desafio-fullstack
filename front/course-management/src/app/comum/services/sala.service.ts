import { Injectable } from '@angular/core';
import { Sala } from '../models/sala.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private http: HttpClient) { }

  private defaultUrl = environment.urlEndPoint + "/salas"

  public getAll(): Observable<Array<Sala>> {
    return this.http.get<Array<Sala>>(this.defaultUrl)
  }

}
