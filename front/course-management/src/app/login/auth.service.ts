import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable()
export class AuthService {

  constructor() { }

  public usuarioEstaAutenticado:boolean = false

  autenticarUsuario(usuario:Usuario){

    this.usuarioEstaAutenticado = usuario.email === "thiago" && usuario.senha === "1" ? true : false
    // console.log(this.usuarioEstaAutenticado)
    return this.usuarioEstaAutenticado
    
  }

  verificarSeUsuarioEstaAutenticado(){
    return this.usuarioEstaAutenticado
  }


}
