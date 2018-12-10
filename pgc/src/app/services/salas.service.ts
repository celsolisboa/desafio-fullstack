import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const urlApiSalas='http://127.0.0.1:3000/api/salas';

@Injectable()
export class SalasService {

  result: any = [];

  constructor(private http: HttpClient){}

  get(): Observable<any> {
    return this.http.get(`${urlApiSalas}?filter[order]=nome`).pipe(
      map(this.extractData));
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
