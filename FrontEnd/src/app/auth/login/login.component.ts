import { Component, OnInit } from '@angular/core';
import { NgForm, } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastyService } from 'ng2-toasty';
import {  Router } from '@angular/router';


class User {
  email: string;
  passord: string;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dado:any;
  user = new User();
  constructor(
    private authService: AuthService,
    private toasty: ToastyService,
    private router: Router) { }

  ngOnInit() {
  }
  login(formLogin: NgForm) {
    if (!formLogin.valid) {
      this.toasty.error('Campos obrigatórios');
      return false;
    }
    this.authService.login(this.user)
     .then(data => {
       this.dado = data;
      if(this.dado.status == 400){
        this.toasty.error('Email ou senha invalidos!')
      }
        this.router.navigate(['/cursos']);
      })
      .catch(
        response =>  {this.toasty.error('Email ou senha invalidos!');
            });

  }
}
