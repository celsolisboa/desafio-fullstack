import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user!: User;

  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  async ngOnInit(): Promise<void> {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
    this.getUser;
  }

  async getUser(): Promise<void> {
    (await this.loginService.getLogin()).subscribe((user) => {
      this.user = user;
      this.loginForm.reset();
      this.router.navigate(['cursos']);
    });
  }
}
