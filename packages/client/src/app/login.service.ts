import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private URL: string = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  async postLogin(user: User) {
    return this.http.post(this.URL, user);
  }
}
