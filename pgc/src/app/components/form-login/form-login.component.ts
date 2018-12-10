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
  email:string = 'admin@pgc.com.br';
  senha:string = 'admin';

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

  onSubmit(login) {

    console.log(login.email == this.email && login.password == this.senha);

    if(login.email == this.email && login.password == this.senha){
      this.router.navigate(['/cursos']);
    }

    // this.userServices.login(login).subscribe(
    //   (data: {}) => {
    //     console.log(data);
    //     if (data) {
    //       this.router.navigate(['/cursos']);
    //     }
    // });
  };

};
