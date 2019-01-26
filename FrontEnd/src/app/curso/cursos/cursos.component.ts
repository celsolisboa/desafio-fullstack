import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  maca = true;
  cursos:any
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.lista();
  }

  lista(){
    this.cursoService.lista()
    .then(cursos => {
      this.cursos = cursos;
      this.cursos = this.cursos.data;

        });

  }
  delete($id){
    this.cursoService.delete($id)
    .then(cursos => {
      this.maca = true;
        this.lista();


        });

  }

}
