import { LoginModel } from './../Models/loginModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable()
export class LoginSrvService {
  Api = 'https://ahhhoqhy2d.execute-api.us-east-1.amazonaws.com/DEV/login';
  constructor(public http: HttpClient, public route: Router) { }

  login(LoginData: LoginModel) {
    console.log(LoginData);
    const body = {
      usuario: LoginData.username,
      senha: LoginData.password
    };
    const jsonBody = JSON.stringify(body);
    return this.http.post(this.Api, jsonBody)
      .toPromise().then((data) => {
        console.log(data);
        return data;
      });
  }
}
