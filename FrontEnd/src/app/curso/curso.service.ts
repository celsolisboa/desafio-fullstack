import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursoUrl = 'http://localhost:8000/api/cursos';
  token = localStorage.getItem('token');
  headers: HttpHeaders;

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({ token: localStorage.getItem('token') });

  }

  lista() {
    let headers = this.headers;
 

    return this.http.get(this.cursoUrl, { headers: this.headers })
      .toPromise()
      .then(Response => Response)
      .catch(response => response);

  }
  create(curso: any) {
    return this.http.post(this.cursoUrl, curso, { headers: this.headers })
      .toPromise()
      .then(Response => Response)
      .catch(response => response);



  }
  delete(id: number) {
    return this.http.delete(this.cursoUrl + '/' + id, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(response => response);


  }

  update(curso: any) {
    return this.http.put(this.cursoUrl + '/' + curso.id, curso, { headers: this.headers })
      .toPromise()
      .then(Response => Response)
      .catch(response => response);




  }
  buscar(id: any) {
    return this.http.get(this.cursoUrl + '/' + id, { headers: this.headers })
      .toPromise()
      .then(Response => Response)
      .catch(response => response);


  }
  professorAndSala() {
    return this.http.get('http://localhost:8000/api/allProfAndSala', { headers: this.headers })
      .toPromise()
      .then(response => response)
      .catch(response => response);



  }
}
