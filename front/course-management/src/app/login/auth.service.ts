import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable()
export class AuthService {

  constructor() { }

  public usuarioEstaAutenticado:boolean = false

  autenticarUsuario(usuario:Usuario){
    if(usuario.email === "thiago" && usuario.senha === "1"){
      this.usuarioEstaAutenticado = true
    }else{
      this.usuarioEstaAutenticado = false
    }
    return this.usuarioEstaAutenticado
  }

  verificarSeUsuarioEstaAutenticado(){
    return this.usuarioEstaAutenticado
  }


}
