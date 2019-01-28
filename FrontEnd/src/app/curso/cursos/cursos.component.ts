import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  maca = true;
  cursos: any
  constructor(
    private cursoService: CursoService,
    private toasty: ToastyService) { }

  ngOnInit() {
    this.lista();
  }

  lista() {
    this.cursoService.lista()
      .then(cursos => {
        console.log(cursos);
        this.cursos = cursos;
        this.cursos = this.cursos.data;
      })
      .catch(
        response => {
          this.toasty.error('Erro');
        });

  }
  delete($id) {
    this.cursoService.delete($id)
      .then(cursos => {
        this.maca = true;
        this.toasty.success('deletado com sucesso!')
        this.lista();
      })
      .catch(
        response => {
          this.toasty.error('Erro');
        });

  }

}
