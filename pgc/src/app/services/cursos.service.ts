import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const urlApiCursos='http://127.0.0.1:3000/api/cursos';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class CursosService {

  result: any = [];
  listaCursos = [];

  constructor(private http: HttpClient){}

  get(): Observable<any> {
    return this.http.get(`${urlApiCursos}?filter={"include":["sala","professor"]}`).pipe(
      map(this.extractData));
  };

  add(curso) {
    this.listaCursos.push(curso);
  };

  delete(curso) {
    console.log(curso);
    let index = this.listaCursos.indexOf(curso);
    console.log(index);
    if (index >= 0) {
      this.listaCursos.slice(index, 1);
    }
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
