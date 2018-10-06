import { HttpClient } from '@angular/common/http';
import { LoginModel } from './../../Models/loginModel';
import { Component, OnInit } from '@angular/core';
/* import jwt from 'jsonwebtoken';
 */
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
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }


  doLogin() {

  }
}
