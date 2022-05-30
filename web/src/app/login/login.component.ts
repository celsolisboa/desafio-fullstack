import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/controller/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: ApiService, private router: Router) {}
  msgErro: any;
  msgFail: any;
  loguei = false;

  ngOnInit(): void {}

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.userForm.valid);
    if (this.userForm.valid) {
      this.service.login(this.userForm.value).subscribe(
        (res) => {
          console.log('Res', res);
          // if (res != Object) {
          // console.log('Login realizado');
          this.router.navigate(['/cursos']);
          this.userForm.reset();
          // }
        },
        (httpError) => {
          this.msgFail = 'Usuario não encontrado';
        }
      );
    } else {
      this.msgErro = 'Email ou senha inválidos';
    }
  }
}
