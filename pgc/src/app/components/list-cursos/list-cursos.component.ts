import { Component, OnInit } from '@angular/core';

import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.less']
})
export class ListCursosComponent implements OnInit {

  listaCursos: any = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.getListCursos();
  }

  getListCursos() {
    this.listaCursos = [];
    this.cursosService.get()
      .subscribe((data: {}) => {
        console.log(data);
        this.listaCursos = data;
      }
    );
  }

  onCardDelete(curso) {
    this.cursosService.delete(curso).subscribe(() => {
      this.getListCursos();
    });
  }

}
