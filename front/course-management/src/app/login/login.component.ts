import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,
              private router: Router) { }

  public usuario: Usuario = new Usuario()
  

  ngOnInit() {
  }

  efetuarLogin() {
    const autenticado = this.authService.autenticarUsuario(this.usuario)

    if(autenticado){
      this.router.navigate(['/cursos'])
    }
    
  }

}
