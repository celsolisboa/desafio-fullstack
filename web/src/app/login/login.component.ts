import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
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
    password: ['', [Validators.required]]
  })
}
async login() {

  this.loading = true

  const data = {
    email: this.formGroup.get('email').value,
    password: this.formGroup.get('password').value,
  }
  await this.authService.login(data);
  this.router.navigate(['']) //colocar rota da pagina assim que for criada
}
}
