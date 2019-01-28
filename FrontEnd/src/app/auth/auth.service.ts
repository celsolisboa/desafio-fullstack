import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserUrl = 'http://localhost:8000/api/user';
  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post(this.UserUrl, user)
      .toPromise()
      .then(response => {
        this.guardaToken(response);
      })
      .catch(error => { error });

  }
  guardaToken(token: any) {
    localStorage.setItem('token', token.token);

  }
  tokenExiste(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }

  }
}
