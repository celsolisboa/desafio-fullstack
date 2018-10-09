import { LoginModel } from './../Models/loginModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable()
export class LoginSrvService {

  constructor(public http: HttpClient, public route: Router) { }

  login(LoginData: LoginModel) {

    console.log(LoginData);

    'http://localhost:3000/login/usuario/:usuario/senha/:senha';
    return this.http.get('http://localhost:3000/login/usuario/' + LoginData.username + '/senha/' + LoginData.password)
      .toPromise().then((data) => {
        console.log(data);
        return data;
      });
  }
}
