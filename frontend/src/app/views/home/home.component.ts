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
/* 
   const api = axios.get('api/cursos').
      then(response => {
        console.log(response.data)
      }).catch(e => {
        console.log(e)
      })

    event.preventDefault()
    alert(email + senha); */
  }

}
