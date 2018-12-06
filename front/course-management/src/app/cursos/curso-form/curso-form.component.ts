import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  constructor() { }

  private professores = [
    { id: 1, nome: "Joao" },
    { id: 2, nome: "Jussara" },
    { id: 3, nome: "Thiago" }
  ]

  private salas = [
    { id: 1, nome: "5001" },
    { id: 2, nome: "2001" },
    { id: 3, nome: "3003" }
  ]


  ngOnInit() {
  }

}
