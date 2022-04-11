import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
    private loginService: LoginService
  ) {}

  async ngOnInit(): Promise<void> {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
    this.postUser();
  }

  async postUser(): Promise<void> {
    (await this.loginService.postLogin(this.user)).subscribe();
  }
}
