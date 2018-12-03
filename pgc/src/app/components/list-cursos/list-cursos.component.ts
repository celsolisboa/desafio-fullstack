import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.less']
})
export class ListCursosComponent implements OnInit {

  listaCursos = [];
  constructor() { }

  ngOnInit() {
    this.listaCursos = [{"nome":"Aula 02","inicio":"2018-12-02T15:03:38.361Z","fim":"2018-12-02T15:03:38.361Z","id":"5c03f46c117a7cc23cb3b0a1","professorId":"5c03dd3c9bbf58b6e07ed6eb","salaId":"5c03dd889bbf58b6e07ed6f0","sala":{"nome":"201","id":"5c03dd889bbf58b6e07ed6f0"},"professor":{"nome":"Maria Joaquina","id":"5c03dd3c9bbf58b6e07ed6eb"}},{"nome":"Aula 04","inicio":"2018-12-02T22:50:46.172Z","fim":"2018-12-02T22:50:46.172Z","id":"5c046220143c48ce2d74974a","professorId":"5c03dd4e9bbf58b6e07ed6ec","salaId":"5c03dd909bbf58b6e07ed6f2","sala":{"nome":"203","id":"5c03dd909bbf58b6e07ed6f2"},"professor":{"nome":"Xavier","id":"5c03dd4e9bbf58b6e07ed6ec"}}];
  }

  onCardDelete(curso) {
  }

}
