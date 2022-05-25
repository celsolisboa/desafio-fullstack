import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  login(event: any, email: string, senha: string){
    event.preventDefault()
    const data = {
      emailUser: email,
      senhaUser: senha
    }
    const api = axios.post('api/user',{
      email: email,
      senha: senha
    }).
        then(response => {
          const result = response.data.message
           // console.log(response.data.message)
            if(result === true){
              window.location.href = '/cursos'
            }
        }).catch(e =>{
          const result = e.response.data.message
          if(result === false){
              console.log(result)
              alert('Usuário ou senha incorretos')
          }
        })
  }
}
