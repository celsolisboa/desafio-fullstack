import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiBaseUrl } from 'src/environments/environment';

interface ILoginRequest {
    email: string;
    password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) {}

  login(data: ILoginRequest): Observable<any> {
    return this.httpClient.post(`${apiBaseUrl}/users/login`, data);
  }
}
