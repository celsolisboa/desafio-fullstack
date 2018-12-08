import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const urlApiCursos='http://127.0.0.1:3000/api/cursos';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class CursosService {

  result: any = [];

  constructor(private http: HttpClient){}

  get(): Observable<any> {
    return this.http.get(`${urlApiCursos}`).pipe(
      map(this.extractData));
  };

  add(curso) {
    console.log(curso)
    return this.http.post(urlApiCursos, curso);
  };

  delete(curso) {
    console.log(curso);
    return this.http.delete(`${urlApiCursos}/${curso._id}`);
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
