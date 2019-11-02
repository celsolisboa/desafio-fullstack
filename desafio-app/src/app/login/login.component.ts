import { Component, OnInit } from '@angular/core';
import { CredeciaisDTO } from '../models/credenciais.dto';
import toastr from "toastr";

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: CredeciaisDTO = { 
    email: "",
    senha: ""
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.creds.email == "" || this.creds.senha == "") {
      toastr.error("Informe o login e senha")
    } else {
      this.router.navigate(['/cursos']);
    }
  }

}
