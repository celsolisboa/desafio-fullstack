import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursoUrl = 'http://localhost:8000/api/cursos';
  token = localStorage.getItem('token');
  headers: HttpHeaders;


  // configUrl = 'assets/config.json';


  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({token:localStorage.getItem('token')});

    // this.headers.append('token', localStorage.getItem('token'));
  }

  lista() {
  //  let headers = this.headers.append('Content-Type', 'application/json; text/html; charset=UTF-8cache-control: no-cache, private');
  //  headers = headers.append('Accept', 'application/json, text/plain, */*');
  //  headers = headers.append('Authorization', 'Basic aGVsaW86MTIz');
  let headers = this.headers;
    console.log(headers);
    console.log(this.token);

    return this.http.get(this.cursoUrl, {headers})
      .toPromise()
     .then(Response => Response)
      .catch(Response => console.log(Response))

  }
  create(curso: any) {
    return this.http.post(this.cursoUrl, curso, {headers} )
      .toPromise()
      .then(Response => Response)
      .catch(Response => console.log(Response))


  }
  delete(id: number) {
    return this.http.delete(this.cursoUrl + '/' + id , {headers})
      .toPromise()
      .then(() => null)
      .catch(Response => alert('O back não que trabalhar :('))

  }

  update(curso: any) {
    return this.http.put(this.cursoUrl + '/' + curso.id, curso, {headers})
      .toPromise()
      .then(Response => Response)
      .catch(Response => alert('O back não que trabalhar :('))



  }
  buscar(id: any) {
    return this.http.get(this.cursoUrl + '/' + id, {headers:this.headers})
      .toPromise()
      .then(Response => Response)
      .catch(Response => alert('O back não que trabalhar :('));

  }
  professorAndSala() {
    return this.http.get('http://localhost:8000/api/allProfAndSala', {headers})
      .toPromise()
      .then(response => response);


  }
}
