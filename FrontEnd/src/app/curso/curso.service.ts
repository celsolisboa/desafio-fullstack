import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursoUrl = 'http://localhost:8000/api/cursos';
  // configUrl = 'assets/config.json';


  constructor(private http: HttpClient) { }

  lista() {
    return this.http.get(this.cursoUrl)
    .toPromise()
    .then(Response => Response)
    .catch(Response =>alert('O back não que trabalhar :('))

  }
  create(curso: any){
    return this.http.post(this.cursoUrl, curso)
    .toPromise()
    .then(Response => Response)
    .catch(Response =>alert('O back não que trabalhar :('))


  }
  delete(id: number){
    return this.http.delete(this.cursoUrl +'/'+id)
    .toPromise()
    .then(() => null)
    .catch(Response =>alert('O back não que trabalhar :('))

  }

  update(curso: any){
    return this.http.put(this.cursoUrl +'/' + curso.id, curso)
    .toPromise()
    .then(Response => Response)
    .catch(Response =>alert('O back não que trabalhar :('))



  }
  buscar(id: any) {
    return this.http.get(this.cursoUrl + '/' + id)
      .toPromise()
      .then(Response => Response)
      .catch(Response => alert('O back não que trabalhar :('));

  }
  professorAndSala() {
    

  }
}
