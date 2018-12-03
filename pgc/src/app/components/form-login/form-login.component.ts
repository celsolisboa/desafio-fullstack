import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.less']
})
export class FormLoginComponent implements OnInit {

  form;
  loginFail: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userServices: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginFail = null;
    this.form = this.formBuilder.group(
      {
        email: this.formBuilder.control('', Validators.required),
        password: this.formBuilder.control('', Validators.required),
      }
    );
  }

  onSubmit(curso) {
    this.userServices.login(curso).subscribe(
      (data: {}) => {
        console.log(data);
        if (data) {
          this.router.navigate(['/cursos']);
        }
      });
  };

}
