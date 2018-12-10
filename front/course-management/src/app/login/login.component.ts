import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UtilService } from '../comum/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,
              private router: Router,
            private utilService: UtilService) { }

  public usuario: Usuario = new Usuario()
  

  ngOnInit() {
  }

  efetuarLogin() {
    const autenticado = this.authService.autenticarUsuario(this.usuario)

    if(autenticado){
      this.router.navigate(['/curso']);
    }else{
      this.utilService.sendMessageError("Usuario ou senha inválidos! tente com: admin@admin.com e senha 123. rs")
    }
    
  }

}
