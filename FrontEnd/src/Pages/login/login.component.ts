import { UserModel } from './../../Models/userModel';
import { CallFunctionSrvService } from './../../Services/callFunctionSrv.service';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './../../Models/loginModel';
import { Component, OnInit } from '@angular/core';
import { LoginSrvService } from '../../Services/loginSrv.service';
import { Router } from '@angular/router';
import { config } from '../../environments/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: LoginModel = {
    username: null,
    password: null
  };
  constructor(public http: HttpClient, public loginSrv: LoginSrvService, public route: Router, public callSrv: CallFunctionSrvService) { }

  ngOnInit() {
  }
  doLogin() {
    console.log('HEEEYYYYY!!!');

    if (this.LoginForm.username !== null || this.LoginForm.username !== '') {
      console.log('Passei no primeiro');
      if (this.LoginForm.password !== null || this.LoginForm.password !== '') {
        this.loginSrv.login(this.LoginForm).then((token: UserModel) => {
          config.token = token.Token;
          this.route.navigateByUrl('/Home');
        });
      }
    }
  }
}
