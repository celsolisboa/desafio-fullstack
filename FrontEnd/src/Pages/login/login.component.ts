import { HttpClient } from '@angular/common/http';
import { LoginModel } from './../../Models/loginModel';
import { Component, OnInit } from '@angular/core';
import jwt from 'jsonwebtoken';

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
    const secretKey = Math.random().toString(36).substr(2, 9);
    let result = null;
    jwt.sign({
      user: this.LoginForm
    }, secretKey,
      {
        expiresIn: '1000s'
      }, (err, token) => {
        result = {
          id: secretKey,
          Token: token
        };
        console.log('funcionaaa', result);

      });
    }
}
