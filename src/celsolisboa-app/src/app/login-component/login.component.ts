import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl("", Validators.required),
  })

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    localStorage.setItem('y', "y");
    this.router.navigate(['/cursos']);
  }

}
