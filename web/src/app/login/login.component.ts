import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/controller/services/auth.service';
import { ApiService } from '../controller/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  

  constructor(private service: ApiService, private router: Router) { }

  msgErro: any;
  msgFail: any;
  loguei = false
  ngOnInit(): void { }

  userForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'senha': new FormControl('', [Validators.required])
  });
  onSubmit(){
    if(this.userForm.valid){
      this.service.login(this.userForm.value).subscrive((res) => {
        if(res != Object){
          console.log('Login realizado com sucesso');
          this.router.navigate(['/cursos'])
          this.userForm.reset();
        }
      },
      (httpError) => {
        this.msgFail = 'Email ou senha inválidos'
      }
      );
    } else {
      this.msgErro = 'Os campos são obrigatórios de serem preenchidos '
    }
  }
}