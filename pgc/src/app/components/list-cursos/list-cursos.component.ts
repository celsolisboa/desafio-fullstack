import { Component, OnInit } from '@angular/core';

import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.less']
})
export class ListCursosComponent implements OnInit {

  listaCursos;

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.listaCursos = this.cursosService.get();
  }

  onCardDelete(curso) {
    this.cursosService.delete(curso);
  }

}
