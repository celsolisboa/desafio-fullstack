import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CursoService } from 'src/app/curso.service';
import { Icurso } from 'src/app/Icursos';
@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  [x: string]: any;

  constructor(private cursoService: CursoService){

  }

  cursos: Icurso[] = [];
  cursos$: Observable<Icurso[]> | undefined;

  ngOnInit() {
    return this.cursos$ = this.cursoService.listarCursos();
  }

  delete(id: number) {
   this.cursoService.deletarCurso(id).subscribe(success =>  window.location.reload())
  } 
  

}
