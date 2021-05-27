import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.createFormGroup()
  }

  createFormGroup() {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  async login() {
    try {

      if (!this.formGroup.valid) {
        return Swal.fire('Erro', 'É necessário informar email e senha para continuar.', 'error');
      }

      this.loading = true;

      const data = {
        email: this.formGroup.get('email').value,
        password: this.formGroup.get('password').value
      }

      await this.authService.login(data);

      this.router.navigate(['/course'])
    } catch (error) {

      let msg = 'Ocorreu um erro ao realizar o login, tente novamente.';

      if (error.status === 403) {
        msg = 'Email e/ou senha inválido(s)';
      }

      Swal.fire('Erro', msg, 'error');
    } finally {
      this.loading = false;
    }
  }

}
