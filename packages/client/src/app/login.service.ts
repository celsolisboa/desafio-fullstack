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

  async getLogin(): Promise<Observable<User>> {
    return this.http.get<User>(this.URL);
  }
}
